import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid-community';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../core/api/api.service';
import { DialogRenderComponent } from '../../shared/dialog-render/dialog-render.component';
import { OrderModalComponent } from './order-modal/order-modal.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  rowData: any;
  columnDefs = [];
  constructor(
    private api: ApiService,
     public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.api.getOrderDetails().subscribe(data => this.rowData = data);
    this.columnDefs = [
      {
        headerName: 'Order No',
        field: 'orderno',
        cellRendererFramework: DialogRenderComponent,
        cellRendererParams: {
          invokeDialog: (params) => this.onViewOrder(params)
        },
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Customer Details',
         field: 'customer',
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
        field: 'orderStatus' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Priority',
        field: 'priority' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Total',
        field: 'orderTotal' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Location',
        field: 'location' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Phone',
        field: 'phone' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      },
      {
        headerName: 'Email',
        field: 'orderStatus' ,
        cellClass: 'cell-wrap-text',
        autoHeight: true
      }
    ];
  }

  onViewOrder (params) {

    const dialogRef = this.dialog.open(OrderModalComponent, {
      //width: '75vw',
      height: '80vh',
      data: params
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'update') {
          console.log('update Service to be called')
      }
    });
    
  }

}