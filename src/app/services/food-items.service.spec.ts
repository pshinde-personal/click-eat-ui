import { TestBed } from '@angular/core/testing';

import { FoodItemsService } from './food-items.service';

describe('FoodItemsService', () => {
  let service: FoodItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
