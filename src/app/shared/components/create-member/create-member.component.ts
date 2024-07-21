import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { SharedModule } from "../../shared.module";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseCardComponent } from "@fuse/components/card";
import { CreateMemberService } from "./create-member.service";
import { CreateMemberDto } from "app/modal/member/create-member.dto";
import { firstValueFrom } from "rxjs";
import { MemberType } from "app/modal/member/member-enum";

export interface CreateMemberQueryParms {
    type: MemberType
    id: number
    redirect_url: string
    org_id: number
    parent_id: number
}

@Component({
    selector: 'create-member',
    templateUrl: './create-member.component.html',
    styleUrls: ['./create-member.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule,

        // Component
        FuseCardComponent
    ],
    providers: [
        CreateMemberService
    ]
})
export class CreateMemberComponent {
    public createMemberForm: FormGroup;
    public createMemberHelper: CreateMemberQueryParms;
    public viewHelper = {
        submitting: false,
        loading: false,
    }
    constructor(
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _createMemberService: CreateMemberService
    ) {
        this.init();
    }

    async init() {
        this.createMemberHelper = this._activatedRoute.snapshot.queryParams as CreateMemberQueryParms;

        if (this.createMemberHelper.id) {
            this.viewHelper.loading = true;
            firstValueFrom(this._createMemberService.getMemberById(this.createMemberHelper.id))
                .then((res: CreateMemberDto) => {
                    this.setForm(res);
                    // this.postResponse = res;
                    // this._cdRef.markForCheck();
                })
                .catch(() => console.log()/**@todo handle error */)
                .finally(() => {
                    this.viewHelper.loading = false;
                    /** @todo loding can be handled */
                });
        } else {
            this.setForm({});
        }
    }

    setForm(res: Partial<CreateMemberDto>) {
        const { type, parent_id, org_id } = this.createMemberHelper;
        this.createMemberForm = this._formBuilder.group({
            id: [res.id],
            firstName: [res.firstName, Validators.required],
            middleName: [res.middleName],
            lastname: [res.lastname],
            imageLink: [res.imageLink],
            email: [res.email, Validators.email],
            mobile: [res.mobile],
            street: [res.street],
            city: [res.city],
            state: [res.state],
            country: [res.country],
            type: [res.type || type, Validators.required],
            parentId: [Number(res.parentId || parent_id)],
            orgId: [Number(res.orgId || org_id)]
        });

        console.log(this.createMemberForm.value);
    }

    back() {
        this._router.navigateByUrl(this.createMemberHelper.redirect_url);
    }

    onSubmit() {
        this.viewHelper.submitting = true;
        firstValueFrom(this._createMemberService.createMember(this.createMemberForm.value))
            .then(() => {
                this.createMemberForm.reset();
                this.back();
            })
            .catch(() => console.log()/**@todo handle error */)
            .finally(() => {
                this.viewHelper.submitting = false;
                /** @todo loding can be handled */
            });
    }
}