import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotel1Component } from './hotel1.component';

describe('Hotel1Component', () => {
  let component: Hotel1Component;
  let fixture: ComponentFixture<Hotel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hotel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hotel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
