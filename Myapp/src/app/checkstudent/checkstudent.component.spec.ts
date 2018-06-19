import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckstudentComponent } from './checkstudent.component';

describe('CheckstudentComponent', () => {
  let component: CheckstudentComponent;
  let fixture: ComponentFixture<CheckstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
