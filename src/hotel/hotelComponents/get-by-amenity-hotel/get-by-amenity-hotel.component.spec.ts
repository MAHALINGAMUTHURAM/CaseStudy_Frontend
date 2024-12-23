import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByAmenityHotelComponent } from './get-by-amenity-hotel.component';

describe('GetByAmenityHotelComponent', () => {
  let component: GetByAmenityHotelComponent;
  let fixture: ComponentFixture<GetByAmenityHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByAmenityHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByAmenityHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
