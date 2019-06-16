import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginRoutingModule } from './userLogin-routing.module';

import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule, CardsFreeModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    InputsModule, WavesModule, InputUtilitiesModule, ButtonsModule, CardsFreeModule,
    FormsModule, ReactiveFormsModule, MatSnackBarModule
  ],
  entryComponents: [RegisterComponent]
})
export class UserLoginModule { }
