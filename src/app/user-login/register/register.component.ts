import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupFormModalName = new FormControl('', Validators.required);
  signupFormModalEmail = new FormControl('', Validators.email);
  signupFormModalPassword = new FormControl('', Validators.required);
  signupFormModalPhone = new FormControl('', Validators.required);
  signupFormModalAddress = new FormControl('', Validators.required);

  constructor(
    public modalRef: MDBModalRef,
    private service: ApiService) { }

  ngOnInit() {
  }

  signUp() {
    const payload = {
      userName: this.signupFormModalName.value,
      password: this.signupFormModalPassword.value,
      email: this.signupFormModalEmail.value,
      phoneNumber: this.signupFormModalPhone.value,
      address: this.signupFormModalAddress.value
    };
    console.log('clicked', this.signupFormModalAddress);
    this.service.registerUser(payload).subscribe(data => console.log(data));
  }

}
