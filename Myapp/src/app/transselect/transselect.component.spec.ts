import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransselectComponent } from './transselect.component';

describe('TransselectComponent', () => {
  let component: TransselectComponent;
  let fixture: ComponentFixture<TransselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
