import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1GalleryComponent } from './home-1-gallery.component';

describe('Home1GalleryComponent', () => {
  let component: Home1GalleryComponent;
  let fixture: ComponentFixture<Home1GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1GalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
