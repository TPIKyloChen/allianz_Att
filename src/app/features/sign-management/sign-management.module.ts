import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignManagementRoutingModule } from './sign-management-routing.module';
import { ShareModule } from '@share/share.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ShareModule, SignManagementRoutingModule],
})
export class SignManagementModule {}
