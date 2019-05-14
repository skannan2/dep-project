import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { DialogRenderComponent } from '../../shared/dialog-render/dialog-render.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';

@Component({
  selector: 'app-user-tickets',
  templateUrl: './user-tickets.component.html',
  styleUrls: ['./user-tickets.component.scss']
})
export class UserTicketsComponent implements OnInit {
  columnDefs: any;
  rowData ;
  search: any;
  searchField: FormControl;
  subscription;
  inptForm = this.fb.group({
    searchField: ['']
  });
  ref: MDBModalRef;
  modaldialogOptions = {
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
        content: { heading: 'Content heading', description: 'Content description'},
        formData: {}
    }
  };

  constructor(
    private uimodalService: MDBModalService,
    private api: ApiService, 
    private fb: FormBuilder,
  ) {
   }
  ngOnInit() {
    this.api.getUserTickets().subscribe(data => this.rowData = data);
    this.columnDefs = [
      {
        headerName: 'Ticket No',
        field: 'ticketno',
        cellRendererFramework: DialogRenderComponent,
        cellRendererParams: {
          invokeDialog: (params) => this.onViewTicket(params)
        },
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Title',
         field: 'title',
         cellClass: 'cell-wrap-text',
         autoHeight: true
      },
      {
        headerName: 'Description',
        field: 'description',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Priority',
        field: 'priority',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Phone',
        field: 'phone',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
         headerName: 'Date',
         field: 'date' ,
         cellClass: 'cell-wrap-text',
         autoHeight: true
        },
      {
        headerName: 'Status',
        field: 'status' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      }
    ];
  }

  onViewTicket(params) {
    console.log(params)
    this.modaldialogOptions.data.formData = params;
    this.ref = this.uimodalService.show(CreateTicketComponent, this.modaldialogOptions)
    
  }

}
