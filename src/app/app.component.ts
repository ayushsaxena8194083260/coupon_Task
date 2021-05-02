import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomValidators} from '../validator/custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataArray = [];
  public couponForm: FormGroup;
  public rulesForm: FormArray;
  get rulesFormGroup() {
    return this.couponForm.get('rules') as FormArray;
  }
  constructor(private router: Router,private  fb: FormBuilder) {
}

  ngOnInit(){

this.couponForm = this.fb.group({
  couponCode: ['', [Validators.required]],
  couponType: ['', [Validators.required]],
  startDate: ['', [Validators.required]],
  endDate: ['', [Validators.required]],
  couponAvailibilty: ['', [Validators.required]], 
  isActive: true, 
  couponCount: "",
  rules: this.fb.array([this.createRule()]),
});
this.rulesForm = this.couponForm.get('rules') as FormArray;

}


createRule(): FormGroup {
  return this.fb.group({
    maxDiscountAmount: [''],
    discountAmount: ['', [Validators.required]],
    discountType: ['', [Validators.required]],
    maxDiscount: ['', [Validators.required]],
    minDiscount: ['', [Validators.required]],
  });
}
  addForm() {

    this.rulesForm.push(this.createRule());
  }
 
  removeContact(index) {
    this.rulesForm.removeAt(index);
  }

  getContactsFormGroup(index): FormGroup {
    const formGroup = this.rulesForm.controls[index] as FormGroup;
    return formGroup;
  }

  createCoupon() {
    if (this.couponForm.valid) {
      if(this.couponForm.value.startDate < this.couponForm.value.startDate ){
        alert("Start Date should be less than To Date")
      }
      else{
        const reqMap = {
          ...this.couponForm.value
        };
        console.log(reqMap)
      }
    
    } else {
      CustomValidators.validateAllFormFields(this.couponForm);
    }
  
    console.log(this.couponForm.value);
  }

}
