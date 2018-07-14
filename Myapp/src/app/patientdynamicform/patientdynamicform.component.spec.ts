import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdynamicformComponent } from './patientdynamicform.component';

describe('PatientdynamicformComponent', () => {
  let component: PatientdynamicformComponent;
  let fixture: ComponentFixture<PatientdynamicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientdynamicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdynamicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
