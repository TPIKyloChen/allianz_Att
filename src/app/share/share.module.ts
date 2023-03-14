import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SampleComponent } from './components/sample/sample.component';

const components = [SampleComponent];

const modules = [MaterialModule];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components],
})
export class ShareModule {}
