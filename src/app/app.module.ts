import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AppRoutingModule } from "./app-routing.module";
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { CollapseComponent } from './component/collapse/collapse.component';
import { DatepickerComponent } from './component/datepicker/datepicker.component';
import { DayOffComponent } from './attendance-management/day-off/day-off.component';
import { ErrandsComponent } from './attendance-management/errands/errands.component';
import { MainZoneComponent } from './main-zone/main-zone.component';
import { SelectComponent } from './component/select/select.component';
import { TableComponent } from './component//table/table.component';
import { YearlyStasComponent } from './component//yearly-stas/yearly-stas.component';

import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    AttendanceManagementComponent,
    CollapseComponent,
    DatepickerComponent,
    DayOffComponent,
    ErrandsComponent,
    SelectComponent,
    TableComponent,
    MainZoneComponent,
    YearlyStasComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);