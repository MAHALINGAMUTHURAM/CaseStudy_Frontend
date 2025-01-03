import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1AboutUsComponent } from './home-1-about-us.component';

describe('Home1AboutUsComponent', () => {
  let component: Home1AboutUsComponent;
  let fixture: ComponentFixture<Home1AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1AboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
