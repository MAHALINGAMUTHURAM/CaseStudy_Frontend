import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHome1Component } from './manager-home1.component';

describe('ManagerHome1Component', () => {
  let component: ManagerHome1Component;
  let fixture: ComponentFixture<ManagerHome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerHome1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
