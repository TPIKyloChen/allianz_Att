import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  date: string;
  punchInTime: string;
  punchOutTime: string;
  location: string;
  displayStatus: string;
  subject: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2022/12/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '職場早會', displayStatus: '-', subject: ''},
  {date: '2022/9/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '', displayStatus: '-', subject: ''},
  {date: '2022/8/01', punchInTime: '08:47:32', punchOutTime: '', location: '戶外早會', displayStatus: '曠職', subject: '因開會晚簽退因開會晚簽退因開會晚簽退'},
  {date: '2022/7/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '', displayStatus: '-', subject: ''},
  {date: '2022/6/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '職場早會', displayStatus: '-', subject: ''},
  {date: '2022/5/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '', displayStatus: '-', subject: ''},
  {date: '2022/4/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '職場早會', displayStatus: '-', subject: ''},
  {date: '2022/3/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '職場早會', displayStatus: '-', subject: ''},
  {date: '2022/2/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '戶外早會', displayStatus: '-', subject: ''},
  {date: '2022/1/01', punchInTime: '08:47:32', punchOutTime: '10:13:05', location: '戶外早會', displayStatus: '-', subject: ''},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  errandsList: string[] = ['select', 'date', 'punchInTime', 'punchOutTime', 'location', 'displayStatus', 'subject'];
  errandsList_c: string[] = ['選擇', '日期', '簽到', '簽退', '單位/地點', '出勤狀況', '說明']
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  getListData(data: any) { 
    console.log(data);
    
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }
}
