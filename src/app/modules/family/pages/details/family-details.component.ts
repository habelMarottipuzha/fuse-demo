import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { MemberService } from 'app/shared/data-service/member.service';
import { ActivatedRoute } from '@angular/router';
import { GetMemberDto } from 'app/modal/member/get-member.dto';
import { PageableResponse } from 'app/modal/pagable-response.dto';

@Component({
    selector: 'app-details',
    templateUrl: './family-details.component.html',
    styleUrls: ['./family-details.component.scss'],
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule
    ]
})
export class FamilyDetailsComponent {
    public family: GetMemberDto;
    public members: PageableResponse<GetMemberDto>;
    public viewHelper = {
        submitting: false,
        loading: false,
    }
    /**
     * Constructor
     */
    constructor(
        private _memberService: MemberService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute,
    ) {
        this._init()
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    private _init() {
        const id = this._activatedRoute.snapshot.params.id;
        this._getFamily(id);
        this._getMemberByFamily(id);
    }

    private _getFamily(id: number) {
        this.viewHelper.loading = true;

        firstValueFrom(this._memberService.getMemberById(Number(id)))
            .then((res: GetMemberDto) => {
                this.family = res;
                this._changeDetectorRef.markForCheck();
            })
            .catch(() => console.log()/**@todo handle error */)
            .finally(() => {
                this.viewHelper.loading = false;
                /** @todo loding can be handled */
            });
    }

    private _getMemberByFamily(id: number) {
        this.viewHelper.loading = true;

        firstValueFrom(this._memberService.getMemberParentId(Number(id)))
            .then((res: PageableResponse<GetMemberDto>) => {
                this.members = res;
                this._changeDetectorRef.markForCheck();
            })
            .catch(() => console.log()/**@todo handle error */)
            .finally(() => {
                this.viewHelper.loading = false;
                /** @todo loding can be handled */
            });
    }
}
