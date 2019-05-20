import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
@Component({
  selector: 'app-dialog-render',
  templateUrl: './dialog-render.component.html',
  styleUrls: ['./dialog-render.component.css']
})
export class DialogRenderComponent implements ICellRendererAngularComp {

  params: any;

  constructor() { }

  agInit (params: any): void {
    this.params = params;
  }

  refresh (): boolean {
    return false;
  }

  invokeDialog () {
    if (this.params.invokeDialog) {
      this.params.invokeDialog(this.params.data);
    }
  }


}