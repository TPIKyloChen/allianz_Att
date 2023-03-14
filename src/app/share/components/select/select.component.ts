import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() list: Array<any> | undefined
  @Input() label: string | undefined;
  @Output() emitSelectData = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(this.list);
  }
  changeSelect(e: any) {
    console.log(e);
    
    this.emitSelectData.emit(e.value)
  }
}
