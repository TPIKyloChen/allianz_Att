import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainZoneComponent } from './main-zone.component';
import { ShareModule } from '@share/share.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MainZoneComponent }];

@NgModule({
  declarations: [MainZoneComponent],
  imports: [CommonModule, ShareModule, RouterModule.forChild(routes)],
})
export class MainZoneModule {}
