import { Component, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AttendanceManagementComponent {
  tabIndex = 0;

  constructor(private router: Router) {}
  ngOnInit(): void {
    // check index when reload page
    switch (this.router.url) {
      case '/attendance/errands':
        this.tabIndex = 0;
        break;
      case '/attendance/dayoff':
        this.tabIndex = 1;
        break;
    }
  }

  tabChange(e: MatTabChangeEvent) {
    if (e.index === 0) {
      this.router.navigate(["attendance/errands"]);
    } else {
      this.router.navigate(["attendance/dayoff"]);
    }
  }
}