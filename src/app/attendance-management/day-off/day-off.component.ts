import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-day-off',
  templateUrl: './day-off.component.html',
  styleUrls: ['./day-off.component.scss']
})
export class DayOffComponent {
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  isApply = true; //申請=true, 查詢=false
  isExpend = true; //合=true 收=false

  submit(isSubmit: boolean) {
    console.log(isSubmit);
  }
}
