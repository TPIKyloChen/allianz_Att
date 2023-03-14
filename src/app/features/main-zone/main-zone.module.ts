import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainZoneComponent } from './main-zone.component';
import { ShareModule } from '@share/share.module';
import { MainZoneRoutingModule } from './main-zone-routing.module';

@NgModule({
  declarations: [MainZoneComponent],
  imports: [
    CommonModule,
    ShareModule,
    MainZoneRoutingModule
  ]
})
export class MainZoneModule { }