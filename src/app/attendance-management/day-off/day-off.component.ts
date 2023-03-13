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
  isExpand = true; //合=true 收=false
  dayOffList = [
    {
      name: '家庭照顧假',
    },
    {
      name: '喪假',
    },
    {
      name: '普通傷病假(住院)',
    },
    {
      name: '普通傷病假(未住院)',
    },
    {
      name: '產假',
    },
    {
      name: '產檢假',
    },
    {
      name: '陪產檢及陪產假',
    },
    {
      name: '公傷病假',
    },
    {
      name: '公假',
    },
    {
      name: '婚假',
    },
    {
      name: '原住民歲時祭儀日',
    }
]

  submit(isSubmit: boolean) {
    console.log(isSubmit);
  }
}
