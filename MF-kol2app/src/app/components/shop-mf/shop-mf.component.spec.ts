import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMFComponent } from './shop-mf.component';

describe('ShopMFComponent', () => {
  let component: ShopMFComponent;
  let fixture: ComponentFixture<ShopMFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
