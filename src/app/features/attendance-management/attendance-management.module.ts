import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceManagementComponent } from './attendance-management.component';
import { DayOffComponent } from './day-off/day-off.component';
import { ErrandsComponent } from './errands/errands.component';
import { ShareModule } from '@app/share/share.module';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceManagementRoutingModule } from './attendance-management-routing.module';

export class AppRoutingModule {}
@NgModule({
  declarations: [
    AttendanceManagementComponent,
    DayOffComponent,
    ErrandsComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    AttendanceManagementRoutingModule
  ],
})
export class AttendanceManagementModule { }
