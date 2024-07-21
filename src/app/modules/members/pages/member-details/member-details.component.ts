import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { MemberService } from '../../../../shared/data-service/member.service';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { FuseCardComponent } from '@fuse/components/card';
import { ActivatedRoute } from '@angular/router';
import { GetMemberDto } from 'app/modal/member/get-member.dto';
import { LoadingWidgetComponent } from 'app/shared/components/loading-widget/loading-widget.component';

@Component({
    selector: 'app-member-details',
    templateUrl: './member-details.component.html',
    styleUrls: ['./member-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule,

        // Component
        FuseCardComponent,
        LoadingWidgetComponent
    ]
})
export class MemberDetailsComponent {
    public selectedMember: GetMemberDto;
    public viewHelper = {
        submitting: false,
        loading: false,
        error: false
    }
    constructor(
        private _memberService: MemberService,
        private _changeDetectorRef: ChangeDetectorRef,
        private _activatedRoute: ActivatedRoute,
    ) {
        this.init()
    }

    init() {
        const id = this._activatedRoute.snapshot.params.id;
        if (id) {
            this.viewHelper.loading = true;

            firstValueFrom(this._memberService.getMemberById(Number(id)))
                .then((res: GetMemberDto) => {
                    this.selectedMember = res;
                    this._changeDetectorRef.markForCheck();
                })
                .catch(() => this.viewHelper = { ...this.viewHelper, error: true })
                .finally(() => this.viewHelper.loading = false);
        }
    }
}
