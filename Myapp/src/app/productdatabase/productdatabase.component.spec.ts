import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdatabaseComponent } from './productdatabase.component';

describe('ProductdatabaseComponent', () => {
  let component: ProductdatabaseComponent;
  let fixture: ComponentFixture<ProductdatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
