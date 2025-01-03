import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1BlogComponent } from './home-1-blog.component';

describe('Home1BlogComponent', () => {
  let component: Home1BlogComponent;
  let fixture: ComponentFixture<Home1BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1BlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
