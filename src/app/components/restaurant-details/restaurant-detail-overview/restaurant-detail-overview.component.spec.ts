import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailOverviewComponent } from './restaurant-detail-overview.component';

describe('RestaurantDetailOverviewComponent', () => {
  let component: RestaurantDetailOverviewComponent;
  let fixture: ComponentFixture<RestaurantDetailOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDetailOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
