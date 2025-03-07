import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSwitchComponent } from './auth-switch.component';

describe('AuthSwitchComponent', () => {
  let component: AuthSwitchComponent;
  let fixture: ComponentFixture<AuthSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
