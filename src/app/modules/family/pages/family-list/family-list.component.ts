import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { FormControl } from "@angular/forms";
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { MemberService } from 'app/shared/data-service/member.service';
import { GetMemberDto } from 'app/modal/member/get-member.dto';
import { PageableResponse } from 'app/modal/pagable-response.dto';
import { MemberHeadingWidgetComponent } from 'app/shared/components/member-heading-widget/member-heading-widget.component';
import { MemberListWidgetComponent } from 'app/shared/components/member-list-widget/member-list-widget.component';
import { MemberType } from 'app/modal/member/member-enum';

@Component({
    selector: 'app-family-list',
    templateUrl: './family-list.component.html',
    styleUrls: ['./family-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MaterialModule,
        SharedModule,

        // Component
        MemberHeadingWidgetComponent,
        MemberListWidgetComponent
    ],
    providers: [MemberService]
})
export class FamilyListComponent implements OnInit, OnDestroy {

    public members$: Observable<PageableResponse<GetMemberDto>>;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    public searchInputControl: FormControl = new FormControl();
    /**
     * Constructor
     */
    constructor(
        private _memberService: MemberService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._memberService.getMembers({
            type: MemberType.MEMBER
        }).subscribe();
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
