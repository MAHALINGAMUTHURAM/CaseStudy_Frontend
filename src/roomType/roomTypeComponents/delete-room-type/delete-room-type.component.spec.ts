import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomTypeComponent } from './delete-room-type.component';

describe('DeleteRoomTypeComponent', () => {
  let component: DeleteRoomTypeComponent;
  let fixture: ComponentFixture<DeleteRoomTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRoomTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
