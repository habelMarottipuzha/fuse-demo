import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { MemberService } from '../../../../shared/data-service/member.service';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { PageableResponse } from 'app/modal/pagable-response.dto';
import { GetMemberDto } from 'app/modal/member/get-member.dto';
import { MemberListWidgetComponent } from 'app/shared/components/member-list-widget/member-list-widget.component';
import { MemberHeadingWidgetComponent } from 'app/shared/components/member-heading-widget/member-heading-widget.component';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule,

        // Component
        MemberHeadingWidgetComponent,
        MemberListWidgetComponent
    ]
})
export class MemberListComponent implements OnInit, OnDestroy {

    public selectedContact: GetMemberDto;
    public members$: Observable<PageableResponse<GetMemberDto>>;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public searchInputControl: FormControl = new FormControl();

    constructor(
        private _memberService: MemberService,
    ) { }

    ngOnInit(): void {
        this._memberService.getMembers().subscribe();
        this.members$ = this._memberService.members$;

        // Subscribe to search input field value changes
        this.searchInputControl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                // tap((query) => console.log(query))
                switchMap(query =>

                    // Search
                    this._memberService.searchContacts(query)
                )
            )
            .subscribe();
    }
    /**
    * On destroy
    */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
