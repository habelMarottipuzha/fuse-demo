import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { MemberService } from '../../member.service';
import { Contact } from '../../member.type';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
    selector: 'app-member-details',
    template: 'TEST',
    // templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone:true,
    imports: [
        SharedModule,
        MaterialModule,
        FuseCardComponent
    ]
})
export class MemberDetailsComponent implements OnInit {
    public contacts: Contact[];
    public selectedContact: Contact;
    public contactsCount: number = 0;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    /**
     * @todo need to change the contact
     */
    public members$: Observable<Contact[]>;

    constructor(
        private _memberService: MemberService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) { }
    // activeIds: string[]
    ngOnInit(): void {
        // this._memberService.getMembers().subscribe();
        // this.members$ = this._memberService.members$;

        // this._memberService.members$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((contacts: Contact[]) => {
        //         // let activeIds = ['cd5fa417-b667-482d-b208-798d9da3213c', 'beec5287-ed50-4504-858a-5dc3f8ce6935']
        //         // this.contacts = contacts.filter(item => {
        //         //     console.log(item, activeIds);

        //         //     // activeIds.indexOf(item.id) === -1
        //         // })

        //         // Update the counts
        //         this.contactsCount = contacts?.length ?? 0;

        //         // Mark for check
        //         this._changeDetectorRef.markForCheck();
        //     });
    }

}
