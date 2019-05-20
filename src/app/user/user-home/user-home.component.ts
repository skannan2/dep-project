import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  modalRef: MDBModalRef;
  modalOptions = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: 'modal-lg',
    containerClass: '',
    animated: true,
    data: {
        heading: 'Create New Ticket',
        content: { heading: 'Content heading', description: 'Content description'}
    },
    formData: {}
  };

  constructor(private modalService: MDBModalService) {
  }

  openModal() {
    this.modalRef = this.modalService.show(CreateTicketComponent, this.modalOptions);
  }


  ngOnInit() {
  }

}
