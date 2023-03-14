import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SampleComponent } from './components/sample/sample.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { YearlyStasComponent } from './components/yearly-stas/yearly-stas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const components = [
  SampleComponent,
  ApplicationFormComponent,
  CollapseComponent,
  DatepickerComponent,
  DialogComponent,
  SelectComponent,
  TableComponent,
  YearlyStasComponent,
];

const modules = [MaterialModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components],
})
export class ShareModule {}
