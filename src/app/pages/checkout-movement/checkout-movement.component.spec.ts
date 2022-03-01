import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutMovementComponent } from './checkout-movement.component';

describe('CheckoutMovementComponent', () => {
  let component: CheckoutMovementComponent;
  let fixture: ComponentFixture<CheckoutMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutMovementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
