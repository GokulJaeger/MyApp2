import { Component, OnInit } from '@angular/core';
import Payment from 'src/app/models/payment';
import { PayloadService } from 'src/app/services/payload.service';

@Component({
  selector: 'app-paypayment',
  templateUrl: './paypayment.component.html',
  styleUrls: ['./paypayment.component.css']
})
export class PaypaymentComponent implements OnInit {

  public apay =new  Payment("",0,0,"",0,0,0);
  constructor(private pservice:PayloadService) { }

  ngOnInit(): void {
  }
  handlesAddPayment(name:string, cid:number,pAmount:number,currency:string,fAccount:number,tAccount:number,balance:number){
    this.apay =new  Payment(name,cid,pAmount,currency,fAccount,tAccount,balance);
    this.pservice.addPayment(this.apay);
  }
}
