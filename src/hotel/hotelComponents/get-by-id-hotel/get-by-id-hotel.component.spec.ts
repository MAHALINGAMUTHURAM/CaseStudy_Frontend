import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdHotelComponent } from './get-by-id-hotel.component';

describe('GetByIdHotelComponent', () => {
  let component: GetByIdHotelComponent;
  let fixture: ComponentFixture<GetByIdHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByIdHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByIdHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
