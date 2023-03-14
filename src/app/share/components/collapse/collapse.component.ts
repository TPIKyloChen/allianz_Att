import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})

export class CollapseComponent {

  @Input() isExpand: boolean | undefined;

  constructor() {
    console.log(this.isExpand);
    
  }
}
