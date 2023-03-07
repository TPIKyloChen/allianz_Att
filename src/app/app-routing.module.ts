import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayOffComponent } from './day-off/day-off.component';
import { MainZoneComponent } from './main-zone/main-zone.component';

const routes: Routes = [
  {
    path: 'sign',
    loadChildren: () =>
      import('@features/sign-management/sign-management.module').then(
        (m) => m.SignManagementModule
      ),
  },
  {
    path: '',
    component: MainZoneComponent,
    children: [
      {
        path: '', redirectTo: "/", pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
