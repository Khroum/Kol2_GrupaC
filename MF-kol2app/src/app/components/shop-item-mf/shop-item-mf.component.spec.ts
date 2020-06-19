import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemMFComponent } from './shop-item-mf.component';

describe('ShopItemMFComponent', () => {
  let component: ShopItemMFComponent;
  let fixture: ComponentFixture<ShopItemMFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemMFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
