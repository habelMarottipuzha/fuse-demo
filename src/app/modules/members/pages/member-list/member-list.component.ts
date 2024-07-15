import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { MemberService } from '../../member.service';
import { Contact } from '../../member.type';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { PageableResponse } from 'app/modal/pagable-response.dto';
import { GetMemberDto } from 'app/modal/member/get-member.dto';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule
    ]
})
export class MemberListComponent implements OnInit, OnDestroy {

    public memberCount: number = 0;
    public selectedContact: GetMemberDto;
    public members$: Observable<PageableResponse<GetMemberDto>>;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public searchInputControl: FormControl = new FormControl();

    constructor(
        private _memberService: MemberService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this._memberService.getMembers().subscribe();
        this.members$ = this._memberService.members$;

        this._memberService.members$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((member: PageableResponse<GetMemberDto>) => {

                // Update the counts
                this.memberCount = member.content?.length ?? 0;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

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

    /**
     * createContact
     */
    public createContact() {

    }

}
