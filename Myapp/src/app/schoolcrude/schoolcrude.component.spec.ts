import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcrudeComponent } from './schoolcrude.component';

describe('SchoolcrudeComponent', () => {
  let component: SchoolcrudeComponent;
  let fixture: ComponentFixture<SchoolcrudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcrudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcrudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
