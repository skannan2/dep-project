import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTicketsComponent } from './user-tickets/user-tickets.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserHomeRoutingModule } from './user-routing.module';

// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, IconsModule, TooltipModule } from 'angular-bootstrap-md';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [UserTicketsComponent, UserHomeComponent, CreateTicketComponent],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    ModalModule, WavesModule, InputsModule, ButtonsModule,
    FormsModule, ReactiveFormsModule, IconsModule, TooltipModule,
    SharedModule, MatDialogModule
  ],
  entryComponents: [ CreateTicketComponent ]
})
export class UserModule { }
