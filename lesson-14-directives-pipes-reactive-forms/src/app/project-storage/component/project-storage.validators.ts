import { AbstractControl } from '@angular/forms';

export class ProjectValidators {
  static nameValidator(control: AbstractControl) {
    const regexp = /\bTest\b/;
    const valid = regexp.test(control.value);
    return valid ? null : { projectName: true };
  }     
}
