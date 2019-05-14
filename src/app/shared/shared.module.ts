import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
// For MDB Angular Free
import { NavbarModule, WavesModule , InputsModule, ButtonsModule, IconsModule, TooltipModule } from 'angular-bootstrap-md';
import { LoaderComponent } from './loader/loader.component';
import { DialogRenderComponent } from './dialog-render/dialog-render.component';
import { FlexLayoutModule } from '@angular/flex-layout';


import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatDialogModule,
  MatSidenavModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserSettingComponent } from './user-setting/user-setting.component';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatDialogModule,
  MatSidenavModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule
];


@NgModule({
  declarations: [HeaderComponent, FooterComponent, GridComponent, LoaderComponent, DialogRenderComponent, SpinnerComponent, UserSettingComponent],
  imports: [
    CommonModule,
     AgGridModule.withComponents([]),
    NavbarModule, WavesModule, InputsModule, ButtonsModule,
    FormsModule, ReactiveFormsModule,
    ...materialModules,
    FlexLayoutModule
  ],
  entryComponents: [DialogRenderComponent, UserSettingComponent],
  exports: [
    HeaderComponent, FooterComponent, GridComponent , DialogRenderComponent, SpinnerComponent, UserSettingComponent
  ]
})
export class SharedModule { }
