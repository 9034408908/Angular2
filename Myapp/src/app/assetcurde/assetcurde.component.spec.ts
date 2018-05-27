import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcurdeComponent } from './assetcurde.component';

describe('AssetcurdeComponent', () => {
  let component: AssetcurdeComponent;
  let fixture: ComponentFixture<AssetcurdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcurdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcurdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
