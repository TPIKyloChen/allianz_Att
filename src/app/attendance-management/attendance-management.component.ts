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

  constructor(private router: Router) { }
  ngOnInit(): void {}

  tabChange(e: MatTabChangeEvent) {
    if (e.index === 0) {
      this.router.navigate(["attendance/errands"]);
    } else {
      this.router.navigate(["attendance/dayoff"]);
    }
  }
}