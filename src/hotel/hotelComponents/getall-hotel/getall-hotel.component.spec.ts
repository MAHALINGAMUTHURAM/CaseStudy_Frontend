import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallHotelComponent } from './getall-hotel.component';

describe('GetallHotelComponent', () => {
  let component: GetallHotelComponent;
  let fixture: ComponentFixture<GetallHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
