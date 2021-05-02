import {FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, AbstractControl} from '@angular/forms';


// export const matchPassword = (control: AbstractControl): { [key: string]: any } => {
//     const password = control.get('password');
//     const confirmPassword = control.get('confirmPassword');
//     console.log(password, confirmPassword)
//     if (!password || !confirmPassword) return null;
//     if (password.value === confirmPassword.value) {
//         return null;
//     } else {
//         return 'password and confirm password must match';
//     }
// };
export class CustomValidators {

  static validateAllFormFields(formGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      // console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        // console.log(control)
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        // console.log(control)
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        // console.log(control)
        this.validateAllFormFields(control);
      }
    });
  }
}
