import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainZoneComponent } from './features/main-zone/main-zone.component';

const routes: Routes = [
  { path: '', component: MainZoneComponent},
  {
    path: 'sign',
    loadChildren: () =>
      import('@features/sign-management/sign-management.module').then(
        (m) => m.SignManagementModule
      ),
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('@features/attendance-management/attendance-management.module').then(
        (m) => m.AttendanceManagementModule
      ),
  },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
