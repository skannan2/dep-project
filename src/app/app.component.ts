import { Component, OnInit } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
import { HTTPStatus } from './core/interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-customer-app';
  spinner = false;
  constructor(private httpStatus: HTTPStatus) {
  }

  ngOnInit() {
    /** spinner starts on init */
    // this.spinner.show();
    this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
      this.spinner = true;
      if (!status) {
        // this.spinner.hide();
         this.spinner = false;
      } else{
        this.spinner = true;
      }
    });
  }

}

