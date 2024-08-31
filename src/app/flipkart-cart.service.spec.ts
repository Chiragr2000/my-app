import { TestBed } from '@angular/core/testing';

import { FlipkartCartService } from './flipkart-cart.service';

describe('FlipkartCartService', () => {
  let service: FlipkartCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
