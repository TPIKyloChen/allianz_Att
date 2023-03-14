import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-zone',
  templateUrl: './main-zone.component.html',
  styleUrls: ['./main-zone.component.scss']
})
export class MainZoneComponent {
  B_item = ["出勤管理", "簽核專區", "組織管理查詢"]

  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }
  goto(i: number) { // 前往路徑B_item
    this.router.navigate(["attendance/errands"]);
  }
}
