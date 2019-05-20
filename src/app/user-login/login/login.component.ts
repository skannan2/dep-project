import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api/api.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  modalRef: MDBModalRef;
  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-lg',
    containerClass: '',
    animated: true,
    data: {
      heading: 'New User Registration',
      content: { heading: 'Content heading', description: 'Content description' }
    }
  };

  constructor(
    private modalService: MDBModalService,
    private service: ApiService,
    private router: Router,
    public fb: FormBuilder) {
    this.LoginForm = fb.group({
      uname: [null, [Validators.required]],
      pwd: [null, Validators.required],
    });
  }

  get uname() { return this.LoginForm.get('uname'); }
  get pwd() { return this.LoginForm.get('pwd'); }

  openModal() {
    this.modalRef = this.modalService.show(RegisterComponent, this.modalOptions);
  }

  login() {
    console.log(this.uname, this.pwd);
    const loginPayload = {
      userName: this.uname.value.toString(),
      password: this.pwd.value.toString()
    };
    this.service.login(loginPayload).subscribe(data => {
      if (data) {
        this.router.navigate(['/user-dashboard']);
      }
    });
    console.log(loginPayload);
    //this.router.navigate(['/user-dashboard'])
  }
  ngOnInit() {
  }

}
