import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Url } from "app/modal/post/create-post.dto";
import { PostTypeEnum } from "app/modal/post/post-enum";
import { MaterialModule } from "app/shared/material.module";
import { SharedModule } from "app/shared/shared.module";

@Component({
    selector: 'video-embedded',
    templateUrl: './video-embedded.component.html',
    styleUrl: './video-embedded.component.scss',
    standalone: true,
    imports: [
        MaterialModule,
        SharedModule,
    ],
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoEmbeddedComponent {

    public get getEmbededVideoList(): { count: number; urls: Url[] } {

        /**
         * @todo remove unwanted
         */
        const urls = this.urls.filter(x => x.type === PostTypeEnum.VIDEO_EMBED)
        return {
            count: urls.length || 0,
            urls
        }
    }

    @Input() urls: Url[] = [];

    constructor(private _domSanitizer: DomSanitizer) { }

    getUrl(url: string) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url)
    }

}