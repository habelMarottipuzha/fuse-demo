import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { MemberService } from 'app/shared/data-service/member.service';
import { ActivatedRoute } from '@angular/router';
import { GetMemberDto } from 'app/modal/member/get-member.dto';
import { PageableResponse } from 'app/modal/pagable-response.dto';
import { LoadingWidgetComponent } from 'app/shared/components/loading-widget/loading-widget.component';
import { UtilService } from 'app/shared/services/util.service';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
    selector: 'app-details',
    templateUrl: './family-details.component.html',
    styleUrls: ['./family-details.component.scss'],
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule,

        // Component
        LoadingWidgetComponent,
        FuseCardComponent
    ]
})
export class FamilyDetailsComponent {
    public family: GetMemberDto;
    public members: PageableResponse<GetMemberDto>;
    public viewHelperFamily = {
        submitting: false,
        loading: false,
        error: false
    }
    public viewHelperMemberList = {
        submitting: false,
        loading: false,
        error: false
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

    imageErrorHandler(event) {
        return UtilService.imageErrorHandler(event);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    private _init() {
        const id = this._activatedRoute.snapshot.params.id;
        this._getFamily(id);
        this._getMemberByFamily(id);
    }

    private _getFamily(id: number) {
        this.viewHelperFamily.loading = true;

        firstValueFrom(this._memberService.getMemberById(Number(id)))
            .then((res: GetMemberDto) => {
                this.family = res;
                this._changeDetectorRef.markForCheck();
            })
            .catch(() => this.viewHelperFamily = { ...this.viewHelperFamily, error: true })
            .finally(() => this.viewHelperFamily.loading = false);
    }

    private _getMemberByFamily(id: number) {
        this.viewHelperMemberList.loading = true;

        firstValueFrom(this._memberService.getMemberParentId(Number(id)))
            .then((res: PageableResponse<GetMemberDto>) => {
                /** @todo remove */
                res.content.length = 15;
                this.members = res;
                this._changeDetectorRef.markForCheck();
            })
            .catch(() => this.viewHelperMemberList = { ...this.viewHelperMemberList, error: true })
            .finally(() => this.viewHelperMemberList.loading = false);
    }
}
