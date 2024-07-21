import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

export enum LoadingWidgetType {
    FULL_SCREEN,
    FULL_WIDTH
}

@Component({
    selector: 'loading-widget',
    templateUrl: './loading-widget.component.html',
    styleUrls: ['./loading-widget.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatProgressSpinnerModule
    ]
})
export class LoadingWidgetComponent {
    @Input() type: LoadingWidgetType;
}