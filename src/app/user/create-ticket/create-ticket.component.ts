import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { FormBuilder, Validators } from '@angular/forms';
import { Tickets } from './model';
import { Subject } from 'rxjs';
import { ApiService } from '../../core/api/api.service';
import { MatSnackBar } from '@angular/material';

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
  formData: Tickets;
  action: Subject<any> = new Subject();
  @Output() passSave: EventEmitter<any> = new EventEmitter();
  @Output() passUpdate: EventEmitter<any> = new EventEmitter();

  constructor(public modalRef: MDBModalRef, private service: ApiService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { }



  onYesClick() {
    this.action.next('yes');
  }

  onNoClick() {
    this.action.next('No');
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
      this.heading = 'Edit Ticket -' + this.formData.title;
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

  save() {

    console.log(this.ticketForm.value);
    // this.action.next(this.ticketForm.value)
    this.service.createTickets(this.ticketForm.value).subscribe(data => {
      if (data.status === 200) {

        this.modalRef.hide();
        this.snackBar.open('ticket created successfully', 'close', {
          duration: 2000,
        });
      }
    });

  }

  update() {
    console.log(this.ticketForm.value);
    // this.action.next(this.ticketForm.value)

    // this.passUpdate.emit(this.ticketForm.value);
    this.modalRef.hide();
  }

}
