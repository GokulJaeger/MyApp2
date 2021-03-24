import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Payment from 'src/app/models/payment';
import { PayloadService } from 'src/app/services/payload.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  pay: Payment[] = [];
  fpay: Payment[] = [];
  invalid:boolean=false;
  m!: Boolean;

  fpUrl:string="http://localhost:3000/payment";
  constructor(private payload: PayloadService, private http:HttpClient) {
    // this.pay=payload.doPayload();
  }

  ngOnInit(): void {
    this.payload
      .doPayload()
      .then((payl: Payment[]) => {
        this.pay = payl;
      })
      .catch((error) => {
        console.log('Error Catched' + error);
      })
      .finally(() => {
        console.log('Payment Loaded !...');
      });
  }
  // || d.fAccount.toString.length<11 || d.fAccount.toString.length>11 || d.tAccount.toString.length<11 || d.tAccount.toString.length>11);
  // handlesgetdata(){
  //   this.payload.doPayload().then((payl:Payment[])=>{
  //     this.pay[0]=payl[0];
  //   });
  //   this.invalid=true;
  // }

  getbankCharges(data: number) {
    let charges: number = 0;
    if (data != 0 && data < 5000) {
      charges += 25;
    } else if (data > 5000 && data < 10000) {
      charges += 50;
    } else if (data < 25000 && data > 10000) {
      charges += 100;
    } else {
      charges += (data / 10000) * 65;
    }
    return charges.toPrecision(8);
  }

  getfraud(){
     this.payload.doPayload().then((a:Payment[])=>{
        this.fpay=a;
    });
    this.invalid=true;
  }
  getfdata(datas:any){
    let das=datas.filter((ds:Payment)=>{
      return ds.currency!=="INR" || ds.fAccount.toString().length!==11;
    });
    return das;
  }

  // checkfraud(data:any){
    
  //   if(data!="IND"){
  //     this.m=true;
  //   }
  //   else{
  //     this.m= false;
  //   }
  //   return this.m;
  // }
}
