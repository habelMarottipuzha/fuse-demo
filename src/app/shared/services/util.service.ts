import { FormGroup } from "@angular/forms";

export class UtilService {
    static resetForm(formGroup: FormGroup) {
        formGroup.reset();
        formGroup.markAsUntouched();
        formGroup.markAsPristine();
    }
}