import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hotel2Component } from './hotel2.component';

describe('Hotel2Component', () => {
  let component: Hotel2Component;
  let fixture: ComponentFixture<Hotel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hotel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hotel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
