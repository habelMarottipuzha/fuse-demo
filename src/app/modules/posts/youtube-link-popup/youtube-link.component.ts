import { ChangeDetectionStrategy, Component, inject, Inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogTitle, MatDialogContent, MAT_DIALOG_DATA, MatDialogModule, MatDialogActions, MatDialogRef } from "@angular/material/dialog";
import { DomSanitizer } from "@angular/platform-browser";
import { Url } from "app/modal/post/create-post.dto";
import { PostTypeEnum } from "app/modal/post/post-enum";
import { MaterialModule } from "app/shared/material.module";
import { SharedModule } from "app/shared/shared.module";

@Component({
    selector: 'youtube-link',
    templateUrl: './youtube-link.component.html',
    styleUrl: './youtube-link.component.scss',
    standalone: true,
    imports: [
        MaterialModule,
        SharedModule,
    ],
    providers: [MatDialogModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeLinkComponent {
    public get getPostTypeEnum(): typeof PostTypeEnum {
        return PostTypeEnum;
    }
    // public videoUrl: Url[];
    private readonly dialogRef = inject(MatDialogRef<YoutubeLinkComponent>);
    errorMessage = signal('');
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Url[],
        public domSanitizer: DomSanitizer
    ) {
        // this.videoUrl = this.data ? this.data.filter(d => d.type === PostTypeEnum.VIDEO_EMBED) : [];
        if (!this.data?.length) {
            this.data = [{
                type: PostTypeEnum.VIDEO_EMBED,
                link: null
            }]
        }
    }

    submit() {
        this.dialogRef.close();
    }

    cancel() {
        this.dialogRef.close();
    }

    add() {
        this.data.push({ type: PostTypeEnum.VIDEO_EMBED });
    }

    remove(index: number) {
        this.data.splice(index, 1);
    }

    updateErrorMessage(link: string) {
        if (!link) {
            this.errorMessage.set('You must enter a youtube video link');
        } else if (!link.includes('youtube')) {
            this.errorMessage.set('link must be youtube');
        } else {
            this.errorMessage.set(null)
        }
    }

    getUrl(url: string) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
    }
}