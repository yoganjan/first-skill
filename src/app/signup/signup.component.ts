import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl!: string;
    error = '';

  constructor(private formBuilder: FormBuilder) {
   
   }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailId: ['', Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.signupForm.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

    this.loading = true;
    
}

}
