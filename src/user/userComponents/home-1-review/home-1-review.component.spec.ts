import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1ReviewComponent } from './home-1-review.component';

describe('Home1ReviewComponent', () => {
  let component: Home1ReviewComponent;
  let fixture: ComponentFixture<Home1ReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1ReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
