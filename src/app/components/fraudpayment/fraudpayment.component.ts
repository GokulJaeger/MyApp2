import { Component, OnInit } from '@angular/core';
import fraudpayment from 'src/app/models/fraudpayment';
import { filter, map } from 'rxjs/operators';
import { FraudpayService } from 'src/app/services/fraudpay.service';
import payment from 'src/app/models/payment';

@Component({
  selector: 'app-fraudpayment',
  templateUrl: './fraudpayment.component.html',
  styleUrls: ['./fraudpayment.component.css'],
})
export class FraudpaymentComponent implements OnInit {
  fpay: fraudpayment[] = [];
  constructor(private fservices: FraudpayService) {}
  ngOnInit(): void {}

  getdatas() {
    this.fservices
      .getfpaydatas()
      .pipe(
        map((datas: fraudpayment[]) =>
          datas.filter((d: fraudpayment) => d.currency != 'INR')
        )
      )
      .subscribe((fraudpay: fraudpayment[]) => {
        this.fpay = fraudpay;
      });
  }
}
