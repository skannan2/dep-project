import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import { OrderModalComponent } from './order-details/order-modal/order-modal.component';
import { TicketModalComponent } from './ticket-details/ticket-modal/ticket-modal.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import {
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule,
} from '@angular/material';

@NgModule({
  declarations: [AdminHomeComponent, TicketDetailsComponent, OrderDetailsComponent, OrderModalComponent, TicketModalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonsModule, WavesModule, CardsFreeModule,
    SharedModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule
  ],
  entryComponents: [OrderModalComponent, TicketModalComponent]
})
export class AdminModule { }
