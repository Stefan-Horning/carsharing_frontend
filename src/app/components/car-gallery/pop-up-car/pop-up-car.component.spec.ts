import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCarComponent } from './pop-up-car.component';

describe('PopUpCarComponent', () => {
  let component: PopUpCarComponent;
  let fixture: ComponentFixture<PopUpCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
