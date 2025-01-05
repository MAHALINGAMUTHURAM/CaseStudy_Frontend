import { TestBed } from '@angular/core/testing';

import { HotelamenityService } from './hotelamenity.service';

describe('HotelamenityService', () => {
  let service: HotelamenityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelamenityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
