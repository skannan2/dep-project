import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormBuilder, Validators } from '@angular/forms';
import { Tickets } from './model';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {
  heading: string;
  content: any;
  optionsSelect: Array<any>;
  ticketForm: any;
  formData: Tickets ;

  constructor(public modalRef: MDBModalRef,
  private fb : FormBuilder ) {
    
  }

  ngOnInit() {
    this.ticketForm = this.fb.group({
      'title': ['', Validators.required],
      'email': ['', [Validators.required]],
      'desc': ['', [Validators.required]],
      'priority': ['', Validators.required],
      'phone': ['', Validators.required]
    });
    if (this.formData) {
      this.heading = 'Edit Ticket -'+ this.formData.title ;
      console.log(this.formData)
      this.ticketForm = this.fb.group({
      'title': [this.formData.title, Validators.required],
      'email': [this.formData.email, [Validators.required]],
      'desc': [this.formData.description, [Validators.required]],
      'priority': [this.formData.priority, Validators.required],
      'phone': [this.formData.phone, Validators.required]
    });
    }
    }

}
