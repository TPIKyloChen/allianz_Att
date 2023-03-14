import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-yearly-stas',
  templateUrl: './yearly-stas.component.html',
  styleUrls: ['./yearly-stas.component.scss']
})

export class YearlyStasComponent {
  dayOffList = [
    '家庭照顧假',
    '喪假',
    '普通傷病假(住院)',
    '普通傷病假(未住院)',
    '產假',
    '產檢假',
    '陪產檢及陪產假',
    '公傷病假',
    '公假',
    '婚假',
    '原住民歲時祭儀日',
  ]
  constructor(public dialog: MatDialog) { }

  openDialog(type: string) {
    let title = '';
    let image = '';
    let label = '';
    let message = '';
    let messageList = [] as Array<any>;
    let typBtn = '';
    switch (type) {
    case 'ruleOfDayDelay':
      title = '遞延休假規則';
      message = '前一年度未修畢之特別年假，可遞延至當年度第12個工作月前請修完畢。';
      typBtn = 'A';
      break;
    case 'dayOffType':
      title = '假別天數總覽';
      messageList = this.dayOffList;
      break;
    }

    this.dialog.open(DialogComponent, {
      disableClose: false,
      minWidth: "300px",
      panelClass: "padding-dialog",
      data: {
        image: image,
        label: label,
        message: message,
        messageList: messageList,
        title: title,
        typBtn: typBtn,
      },
    });
  }
}
