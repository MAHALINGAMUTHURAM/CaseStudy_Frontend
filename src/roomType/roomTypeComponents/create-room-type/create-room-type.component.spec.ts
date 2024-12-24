import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomTypeComponent } from './create-room-type.component';

describe('CreateRoomTypeComponent', () => {
  let component: CreateRoomTypeComponent;
  let fixture: ComponentFixture<CreateRoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRoomTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
