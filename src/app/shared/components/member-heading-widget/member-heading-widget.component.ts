import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core";


@Component({
    selector: 'member-heading-widget',
    templateUrl: './member-heading-widget.component.html',
    styleUrls: ['./member-heading-widget.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class MemberHeadingWidgetComponent {
    @Input() count: number;
    @Input() title: string;
}