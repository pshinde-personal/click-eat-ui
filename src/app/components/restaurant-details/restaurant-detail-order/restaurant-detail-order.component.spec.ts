import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailOrderComponent } from './restaurant-detail-order.component';

describe('RestaurantDetailOrderComponent', () => {
  let component: RestaurantDetailOrderComponent;
  let fixture: ComponentFixture<RestaurantDetailOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDetailOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
