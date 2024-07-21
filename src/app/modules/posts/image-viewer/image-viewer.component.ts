import { Component, ChangeDetectionStrategy, Input, } from "@angular/core";
import { Url } from "app/modal/post/create-post.dto";
import { PostTypeEnum } from "app/modal/post/post-enum";
import { MaterialModule } from "app/shared/material.module";
import { UtilService } from "app/shared/services/util.service";
import { SharedModule } from "app/shared/shared.module";

@Component({
    selector: 'image-viewer',
    templateUrl: './image-viewer.component.html',
    styleUrl: './image-viewer.component.scss',
    standalone: true,
    imports: [
        MaterialModule,
        SharedModule,
    ],
    exportAs: 'image-viewer',
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageViewerComponent {

    public get getImageList(): { count: number; urls: Url[] } {

        /**
         * @todo remove unwanted
         */
        const urls = this.urls.filter(x => x.type === PostTypeEnum.IMAGE || x.type.includes('jpg') as any)
        return {
            count: urls.length || 0,
            urls
        }
    }

    @Input() urls: Url[] = [];

    errorHandler(event) {
        return UtilService.imageErrorHandler(event);
    }

}