import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../core/api/api.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(
    public modalRef: MDBModalRef,
    private snackBar: MatSnackBar,
    private service: ApiService,
    private router: Router,
    private fb: FormBuilder) {
    this.registerForm = fb.group({
      signupFormModalName: [null, [Validators.required]],
      signupFormModalEmail: [null, [Validators.required]],
      signupFormModalPassword: [null, [Validators.required]],
      signupFormModalPhone: [null, [Validators.required]],
      signupFormModalAddress: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  get signupFormModalName() { return this.registerForm.get('signupFormModalName'); }
  get signupFormModalEmail() { return this.registerForm.get('signupFormModalEmail'); }
  get signupFormModalPassword() { return this.registerForm.get('signupFormModalPassword'); }
  get signupFormModalPhone() { return this.registerForm.get('signupFormModalPhone'); }
  get signupFormModalAddress() { return this.registerForm.get('signupFormModalAddress'); }


  signUp() {
    const payload = {
      userName: this.signupFormModalName.value,
      password: this.signupFormModalPassword.value,
      email: this.signupFormModalEmail.value,
      phoneNumber: this.signupFormModalPhone.value,
      address: this.signupFormModalAddress.value
    };
    this.service.registerUser(payload).subscribe(res => {
      if (res.status === 201) {
        this.modalRef.hide();
        this.router.navigate(['/user-login']);
        this.snackBar.open('registered successfully', 'close', {
          duration: 2000,
        });
      }
    });
  }

}
