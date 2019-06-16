import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  // { path: 'login',  component: LoginComponent,  canActivate: [AuthGuard] }
  { path: 'user-login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class UserLoginRoutingModule {
}
