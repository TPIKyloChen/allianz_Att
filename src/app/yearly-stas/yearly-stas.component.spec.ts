import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyStasComponent } from './yearly-stas.component';

describe('YearlyStasComponent', () => {
  let component: YearlyStasComponent;
  let fixture: ComponentFixture<YearlyStasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyStasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyStasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
