import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypaymentComponent } from './paypayment.component';

describe('PaypaymentComponent', () => {
  let component: PaypaymentComponent;
  let fixture: ComponentFixture<PaypaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
