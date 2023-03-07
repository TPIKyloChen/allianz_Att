import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { CONST_ROUTING } from "./app-routing.module";
import { MainZoneComponent } from './main-zone/main-zone.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    MainZoneComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CONST_ROUTING,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);