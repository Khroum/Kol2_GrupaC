import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsMFComponent } from './shop-details-mf.component';

describe('ShopDetailsMFComponent', () => {
  let component: ShopDetailsMFComponent;
  let fixture: ComponentFixture<ShopDetailsMFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsMFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
