import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@features/main-zone/main-zone.module').then(
        (m) => m.MainZoneModule
      ),
  },
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
      import(
        '@features/attendance-management/attendance-management.module'
      ).then((m) => m.AttendanceManagementModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
