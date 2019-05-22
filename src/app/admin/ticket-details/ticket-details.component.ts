import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api/api.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { DialogRenderComponent } from '../../shared/dialog-render/dialog-render.component';
import { TicketModalComponent } from './ticket-modal/ticket-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  rowData: any;
  columnDefs: any;
  constructor(
    private api: ApiService,
    public dialog: MatDialog) { }

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
        field: 'date',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Status',
        field: 'status',
        cellClass: 'cell-wrap-text',
        autoHeight: true
      }
    ];
  }


  onViewTicket(params) {

    const dialogRef = this.dialog.open(TicketModalComponent, {
      height: '80vh',
      data: params
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });

  }

}