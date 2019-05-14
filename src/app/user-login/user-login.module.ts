import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginRoutingModule } from './userLogin-routing.module';

import { InputsModule, WavesModule, ButtonsModule, CardsFreeModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    InputsModule, WavesModule, ButtonsModule, CardsFreeModule,
    FormsModule, ReactiveFormsModule
  ],
  entryComponents: [ RegisterComponent ]
})
export class UserLoginModule { }
