import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceregformComponent } from './financeregform.component';

describe('FinanceregformComponent', () => {
  let component: FinanceregformComponent;
  let fixture: ComponentFixture<FinanceregformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceregformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
