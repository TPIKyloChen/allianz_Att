import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { DayOffComponent } from './attendance-management/day-off/day-off.component';
import { ErrandsComponent } from './attendance-management/errands/errands.component';
import { MainZoneComponent } from './main-zone/main-zone.component';

const routes: Routes = [
  {
    path: 'sign',
    loadChildren: () =>
      import('@features/sign-management/sign-management.module').then(
        (m) => m.SignManagementModule
      ),
  },
  { path: '', component: MainZoneComponent},
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
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
