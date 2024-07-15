import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";
import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared.module";

@Component({
    selector: 'create-member',
    templateUrl: './create-member.component.html',
    styleUrls: ['./create-member.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        SharedModule,
        MaterialModule
    ]
})
export class CreateMemberComponent {

}