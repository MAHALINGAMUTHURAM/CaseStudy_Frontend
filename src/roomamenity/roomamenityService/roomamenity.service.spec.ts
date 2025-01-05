import { TestBed } from '@angular/core/testing';

import { RoomamenityService } from './roomamenity.service';

describe('RoomamenityService', () => {
  let service: RoomamenityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomamenityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
