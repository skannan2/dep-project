import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GridOptions, GridApi } from 'ag-grid-community';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() columnDefs: any;
  @Input() rowData ;
  search: any;
  gridOptions: GridOptions;
  gridApi: GridApi;
  searchField: FormControl;
  subscription;
  inptForm = this.fb.group({
    searchField: ['']
  });
  constructor(private fb: FormBuilder,) { 
     this.inptForm.get('searchField').valueChanges.pipe(
    debounceTime(1000),
    distinctUntilChanged()
   ).subscribe((res) => {
      this.gridApi.setQuickFilter(res);
   });
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  ngOnInit() {
  }

  onExport() {
    const params = {
      fileName: 'reports'
    };
    this.gridApi.exportDataAsCsv(params);
  }

}
