import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.scss']
})
export class TicketModalComponent implements OnInit {
  ticketForm: any;
  ticketStatus = [
    {value: 'Resolved', viewValue: 'Resolved'},
    {value: 'Completed', viewValue: 'Completed'},
    {value: 'InProgress', viewValue: 'In Progress'},
    {value: 'Closed', viewValue: 'Closed'},

  ];

  constructor(public dialogRef: MatDialogRef<TicketModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder) {
      console.log(this.data)
     }
    

  ngOnInit() {
    if(this.data){
      this.ticketForm = this.fb.group({
      'title': [this.data.title, Validators.required],
      'description': [this.data.description, Validators.required],
      'email': [this.data.email, [Validators.required]],
      'status': [this.data.status, Validators.required],
      'phone': [this.data.phone, Validators.required],
      'priority': [this.data.priority, Validators.required],
      'comments': [this.data.comments, Validators.required],

    });
    }
  }

}