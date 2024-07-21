import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GetMemberDto } from "app/modal/member/get-member.dto";
import { PageableResponse } from "app/modal/pagable-response.dto";
import { Observable } from "rxjs";


@Component({
    selector: 'member-list-widget',
    templateUrl: './member-list-widget.component.html',
    styleUrls: ['./member-list-widget.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports:[
        CommonModule,
        RouterModule
    ]
})
export class MemberListWidgetComponent {
    @Input()  members$: Observable<PageableResponse<GetMemberDto>>;   
}