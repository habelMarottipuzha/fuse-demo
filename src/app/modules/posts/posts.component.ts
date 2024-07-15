import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    QueryList,
    Renderer2,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import { FuseCardComponent } from '@fuse/components/card';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { PostService } from './post.service';
import { BehaviorSubject, catchError, firstValueFrom, of } from 'rxjs';
import { PostTypeEnum, PostVisibilityEnum } from 'app/modal/post/post-enum';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreatePostDto, Url } from 'app/modal/post/create-post.dto';
import { MatDialog } from '@angular/material/dialog';
import { YoutubeLinkComponent } from './youtube-link-popup/youtube-link.component';
import { FileUploadService, FileUploadType, ImageStatus, UploadHelper } from 'app/shared/services/file-upload.service';
import { GetPostDto } from 'app/modal/post/get-post.dto';
import { PageableResponse } from 'app/modal/pagable-response.dto';
import { DateAgoPipe } from 'app/shared/pipes/date-age.pipe';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { VideoEmbeddedComponent } from './video-embedded/video-embedded.component';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.scss',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        SharedModule,
        MaterialModule,

        // Pipe
        DateAgoPipe,

        // Components
        FuseCardComponent,
        YoutubeLinkComponent,
        ImageViewerComponent,
        VideoEmbeddedComponent
    ],
    providers: [PostService]
})
export class PostsComponent implements AfterViewInit {
    numberOfPosts: any = {};
    selectedFilter: string = 'post';
    createPostForm: FormGroup;

    imageFile = null;
    fileList: File[] = [];
    fileListASDataUrl: any[] = [];
    imageUploadHelper$: BehaviorSubject<UploadHelper>;
    uploadHelper: UploadHelper;
    viewHelper = {
        submitting: false,
        loading: false,
    }

    postResponse: PageableResponse<GetPostDto>;

    @ViewChildren(FuseCardComponent, { read: ElementRef }) private _fusePosts: QueryList<ElementRef>;

    public get getVisibilityEnum(): typeof PostVisibilityEnum {
        return PostVisibilityEnum;
    }

    public get getVisibility(): PostVisibilityEnum {
        return this.createPostForm.get('visibility').value || PostVisibilityEnum.PUBLIC;
    }

    public get images(): string[] {
        return this.fileListASDataUrl
    }

    public get youtubeUrl(): number {
        const v: Url[] = this.createPostForm.get('urls').value || [];
        return v.filter(x => x.type = PostTypeEnum.VIDEO_EMBED)?.length;
    }

    /**
     * Constructor
     */
    constructor(
        private _renderer2: Renderer2,
        private _postService: PostService,
        private _cdRef: ChangeDetectorRef,
        private _dialog: MatDialog,
        private _fileUploadService: FileUploadService
    ) {
        this.createPostForm = new FormGroup({
            title: new FormControl(''),
            content: new FormControl('', [Validators.required]),
            urls: new FormControl([]),
            visibility: new FormControl(PostVisibilityEnum.PUBLIC),
            pinned: new FormControl(true),
            metadata: new FormGroup({
                tags: new FormControl([]),
                userMentions: new FormControl([]),
                location: new FormControl(),
                blurHash: new FormControl(),
            }),
            expireOn: new FormControl(''),
        });
        console.log(this.createPostForm.value);

        this._getPost(1);

        /**
         * Image upload listerner
         */
        this.imageUploadHelper$ = this._fileUploadService.imageUploadHelper$;
        this.imageUploadHelper$.subscribe({
            next: (uploadHelper: UploadHelper) => {
                this.uploadHelper = uploadHelper;
                if (uploadHelper.status === ImageStatus.COMPLETED) {
                    this.createPost(uploadHelper.uploadedFiles);
                }
                /**
                 * @todo handle error
                 */
                this._cdRef.markForCheck();
            },
            error: () => {
                this.viewHelper.submitting = false;
                this._cdRef.markForCheck();
            }
        })
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * After view init
     */
    ngAfterViewInit(): void {

        // Filter the posts for the first time
        // this._filterPosts();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    public createPost(uploadedFiles: Url[]) {
        const isValid = this.createPostForm.valid;
        if (isValid) {
            const d: CreatePostDto = this.createPostForm.value;
            const payload: CreatePostDto = {
                ...d,
                urls: [
                    ...d?.urls ?? [],
                    ...uploadedFiles
                ]
            };

            firstValueFrom(this._postService.createPost(payload))
                .then(() => {
                    this.fileList = [];
                    this.fileListASDataUrl = [];
                    this.createPostForm.reset();
                })
                .catch(x => console.log()/**@todo handle error */)
                .finally(() => {
                    this.viewHelper.submitting = false;
                    this._cdRef.markForCheck();
                });
        } else {
            /**
             * @todo check and handle if needed
             */
        }
    }

    public onSubmit() {
        if (!this.createPostForm.valid) return;
        /** @todo add upload error actions */

        /**
         * upload file
         * - @var imageUploadHelper$ will trigger
         */
        this.viewHelper.submitting = true;
        this._fileUploadService.upload(this.fileList, FileUploadType.IMAGE);
    }

    public enterYoutubeLink() {
        this._dialog.open(YoutubeLinkComponent, {
            data: this.createPostForm.get('urls').value || []
        }).afterClosed().subscribe(result => {
            this.createPostForm.patchValue({ urls: result });
            this._cdRef.markForCheck();
        });
    }

    public addFile(event) {
        const file = event?.target?.files[0];
        this.fileList.push(file);
        const fileIndex = this.fileList.length - 1;
        const mimeType = this.fileList[fileIndex].type;
        if (mimeType.match(/image\/*/) == null) {
            alert("Only image files are supported")
            // this.fileListASDataUrl[index] = "Only images are supported.";
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(this.fileList[fileIndex]);
        reader.onload = () => {
            this.fileListASDataUrl.push(reader.result);
            this._cdRef.markForCheck();
        }
        this.imageFile = null;
    }

    public setVisibilityItems(visibility: PostVisibilityEnum) {
        this.createPostForm.patchValue({ 'visibility': visibility });
    }

    public remove(index: number) {
        this.fileList.splice(index, 1);
        this.fileListASDataUrl.splice(index, 1);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _getPost(orgId: number) {
        this.viewHelper.loading = true;
        firstValueFrom(this._postService.getPost(orgId))
            .then((res: PageableResponse<GetPostDto>) => {
                this.postResponse = {
                    ...res,
                    content: res.content.filter(x => x.id === 329)
                }
                this._cdRef.markForCheck();
            })
            .catch(() => console.log()/**@todo handle error */)
            .finally(() => {
                this.viewHelper.loading = false;
                /** @todo loding can be handled */
            });
    }
}
