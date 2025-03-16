import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditSearchComponent } from './popup-edit-search.component';

describe('PopupEditSearchComponent', () => {
  let component: PopupEditSearchComponent;
  let fixture: ComponentFixture<PopupEditSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupEditSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEditSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
