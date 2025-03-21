import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGalleryComponent } from './car-gallery.component';

describe('CarGalleryComponent', () => {
  let component: CarGalleryComponent;
  let fixture: ComponentFixture<CarGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
