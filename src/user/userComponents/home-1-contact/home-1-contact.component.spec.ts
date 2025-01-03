import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1ContactComponent } from './home-1-contact.component';

describe('Home1ContactComponent', () => {
  let component: Home1ContactComponent;
  let fixture: ComponentFixture<Home1ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
