import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudeproductComponent } from './crudeproduct.component';

describe('CrudeproductComponent', () => {
  let component: CrudeproductComponent;
  let fixture: ComponentFixture<CrudeproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudeproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
