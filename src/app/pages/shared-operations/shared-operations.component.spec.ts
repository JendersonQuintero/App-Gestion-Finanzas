import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedOperationsComponent } from './shared-operations.component';

describe('SharedOperationsComponent', () => {
  let component: SharedOperationsComponent;
  let fixture: ComponentFixture<SharedOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
