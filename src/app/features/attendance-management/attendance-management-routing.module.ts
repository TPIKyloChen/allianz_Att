import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceManagementComponent } from './attendance-management.component';
import { DayOffComponent } from './day-off/day-off.component';
import { ErrandsComponent } from './errands/errands.component';

const routes: Routes = [
  {
    path: 'attendance', component: AttendanceManagementComponent,
    children: [
      {
        path: 'errands',
        component: ErrandsComponent,
      },
      {
        path: 'dayoff',
        component: DayOffComponent,
      }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AttendanceManagementRoutingModule { }
