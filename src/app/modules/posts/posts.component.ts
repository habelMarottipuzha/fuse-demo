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
import { catchError, of } from 'rxjs';
import { PostTypeEnum, PostVisibilityEnum } from 'app/modal/post/post-enum';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreatePostDto } from 'app/modal/post/create-post.dto';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.scss',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        SharedModule,
        MaterialModule,
        FuseCardComponent,
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

    /**
     * Constructor
     */
    constructor(
        private _renderer2: Renderer2,
        private _postService: PostService,
        private _cdRef: ChangeDetectorRef
    ) {
        this.createPostForm = new FormGroup({
            title: new FormControl(''),
            content: new FormControl('', [Validators.required]),
            contentUrls: new FormControl([]),
            type: new FormControl(PostTypeEnum.TEXT),
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

    public createPost() {
        console.log(this.createPostForm.value);
        this._postService.createPost({} as any)
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
            this.fileListASDataUrl.push(reader.result)
            console.log(this.fileListASDataUrl);
            this._cdRef.markForCheck()
        }
        this.imageFile = null;
    }

    public remove(index: number) {
        this.fileList.splice(index, 1);
        this.fileListASDataUrl.splice(index, 1);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    private _setImageAsDataUrl() {
        if (!this.fileList?.length) return;

        for (const index in this.fileList) {

            const mimeType = this.fileList[index].type;
            if (mimeType.match(/image\/*/) == null) {
                alert("Only image files are supported")
                // this.fileListASDataUrl[index] = "Only images are supported.";
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(this.fileList[index]);
            reader.onload = () => {
                this.fileListASDataUrl.push(reader.result);
                this._cdRef.markForCheck();
            }
        }
    }

    /**
     * Filter the posts based on the selected filter
     *
     * @private
     */
    private _filterPosts(): void {
        // Go through all fuse-posts
        this._fusePosts.forEach((fuseCard) => {

            // If the 'all' filter is selected...
            if (this.selectedFilter === 'all') {
                // Remove hidden class from all posts
                fuseCard.nativeElement.classList.remove('hidden');
            }
            // Otherwise...
            else {
                // If the card has the class name that matches the selected filter...
                if (fuseCard.nativeElement.classList.contains('filter-' + this.selectedFilter)) {
                    // Remove the hidden class
                    fuseCard.nativeElement.classList.remove('hidden');
                }
                // Otherwise
                else {
                    // Add the hidden class
                    fuseCard.nativeElement.classList.add('hidden');
                }
            }
        });
    }

    private _getPost(orgId: number) {
        this._postService
            .getPost(orgId)
            .pipe(catchError((error) => {
                console.error('There was an error!', error);
                return of();
            }))
            .subscribe((post) => {
                console.log(post);
            })
    }
}
