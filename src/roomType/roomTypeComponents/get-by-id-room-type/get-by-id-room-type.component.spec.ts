import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdRoomTypeComponent } from './get-by-id-room-type.component';

describe('GetByIdRoomTypeComponent', () => {
  let component: GetByIdRoomTypeComponent;
  let fixture: ComponentFixture<GetByIdRoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByIdRoomTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetByIdRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
