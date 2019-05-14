import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { DashBoardGuard } from '../core/guards/dashboard.guard';

const routes: Routes = [
    { path: 'user-dashboard',  component: UserHomeComponent ,canActivate: [DashBoardGuard],
    canLoad: [DashBoardGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class UserHomeRoutingModule {
}
