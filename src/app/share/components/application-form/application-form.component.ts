import { Component, ElementRef, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  defaultLabel = '假別';
  dayOffList = [
    {
      name: '家庭照顧假',
      children : []
    },
    {
      name: '喪假',
      children : ['眷屬身故日', '親屬關係']
    },
    {
      name: '普通傷病假(住院)',
      children : ['住院日期']
    },
    {
      name: '普通傷病假(未住院)',
      children : []
    },
    {
      name: '產假',
      children : ['生產日']
    },
    {
      name: '產檢假',
      children : []
    },
    {
      name: '陪產檢及陪產假',
      children : ['陪產日/陪產檢日']
    },
    {
      name: '公傷病假',
      children : ['職災發生日']
    },
    {
      name: '公假',
      children : []
    },
    {
      name: '婚假',
      children : ['登記結婚日']
    },
    {
      name: '原住民歲時祭儀日',
      children : ['族別']
    }
  ]
  selectOption =[]
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    
  }
  emitSelectData(e:any) {
    // console.log(e);
    this.selectOption = e.children;
  }
}
