import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  orderForm: any;
  OrderStatus = [
    {value: 'Resolved', viewValue: 'Resolved'},
    {value: 'Completed', viewValue: 'Completed'},
    {value: 'InProgress', viewValue: 'In Progress'},
    {value: 'Closed', viewValue: 'Closed'},

  ];

  constructor(public dialogRef: MatDialogRef<OrderModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder) { 
      console.log(this.data);
    }

  ngOnInit() {
    if(this.data){
      this.orderForm = this.fb.group({
      'customer': [this.data.customer, Validators.required],
      'email': [this.data.email, [Validators.required]],
      'location': [this.data.location, [Validators.required]],
      'orderStatus': [this.data.orderStatus, Validators.required],
      'phone': [this.data.phone, Validators.required],
      'priority': [this.data.priority, Validators.required],
      'comments': [this.data.comments, Validators.required],

    });
    }
  }

}