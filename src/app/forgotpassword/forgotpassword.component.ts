import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.sass']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  constructor(private formBuilder: FormBuilder , private route: ActivatedRoute,) { }

  ngOnInit(){
    this.forgotpasswordForm = this.formBuilder.group({
      emailId: ['', Validators.required]
      
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotpasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotpasswordForm.invalid) {
        return;
    }

    this.loading = true;
  }

}
