import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AboutService } from './about.service';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { GetAboutDto } from 'app/modal/about/get-about.dto';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        SharedModule,
        MaterialModule,
    ],
    providers: [AboutService]
})
export class AboutComponent {
    public aboutResponse: GetAboutDto;
    public viewHelper = {
        submitting: false,
        loading: false,
        error: false
    }
    constructor(
        private _cdRef: ChangeDetectorRef,
        private _aboutService: AboutService
    ) {
        this.init()
    }
    init() {

        this.viewHelper.loading = true;
        firstValueFrom(this._aboutService.getAboutOrgById(1))
            .then((res: GetAboutDto) => {
                // this.postResponse = { ...res, content: res.content.filter(x => x.id === 329) };
                this.aboutResponse = res;
                this._cdRef.markForCheck();
            })
            .catch(() => this.viewHelper.error = true)
            .finally(() => this.viewHelper.loading = false);
    }
}
