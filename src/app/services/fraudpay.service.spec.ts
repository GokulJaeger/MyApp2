import { TestBed } from '@angular/core/testing';

import { FraudpayService } from './fraudpay.service';

describe('FraudpayService', () => {
  let service: FraudpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraudpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
