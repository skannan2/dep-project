import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AdminModule } from "./admin/admin.module";
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { UserLoginModule } from "./user-login/user-login.module";
import { CoreModule } from "./core/core.module";
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { ApiService } from "./core/api/api.service";
// import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTPListener, HTTPStatus } from "./core/interceptor";

const rxJSServices = [HTTPListener, HTTPStatus];

const FeatureModules = [
  AdminModule,
  SharedModule,
  UserModule,
  UserLoginModule,
  CoreModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ...FeatureModules,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([]),
    BrowserAnimationsModule
    // NgxSpinnerModule
  ],
  providers: [...rxJSServices, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
