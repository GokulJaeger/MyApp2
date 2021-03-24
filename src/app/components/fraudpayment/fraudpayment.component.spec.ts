import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudpaymentComponent } from './fraudpayment.component';

describe('FraudpaymentComponent', () => {
  let component: FraudpaymentComponent;
  let fixture: ComponentFixture<FraudpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
