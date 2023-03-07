import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { DayOffComponent } from './attendance-management/day-off/day-off.component';
import { MainZoneComponent } from './main-zone/main-zone.component';
import { MaterialModule } from './material.module';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
@NgModule({
  declarations: [
    AppComponent,
    AttendanceManagementComponent,
    DayOffComponent,
    MainZoneComponent,
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