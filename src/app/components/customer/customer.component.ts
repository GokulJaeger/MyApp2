import { Component, OnInit } from '@angular/core';
import customer from 'src/app/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  cust: customer[] = [];
  gcust:customer[]=[];
  invalid: boolean = false;
  nvalid: boolean = false;
  valid:boolean=false;
  num:number=0;
  constructor() {
    this.cust = [
      {
        cid: 3514684,
        cname: 'Gokul',
        ptype: 'Debit Card',
        amt: 1245,
        card: 214598654679,
        limit: 45000,
        balance: 124500,
        dob: 'May 20 1997',
      },
      {
        cid: 658751,
        cname: 'Sachin',
        ptype: 'Debit Card',
        amt: 5487,
        card: 876532215498,
        limit: 45000,
        balance: 548710,
        dob: 'June 13 2005',
      },
      {
        cid: 984524,
        cname: 'Sweatha',
        ptype: 'Debit Card',
        amt: 9878,
        card: 824769516848,
        limit: 45000,
        balance: 659820,
        dob: 'June 16 2002',
      },
    ];
  }

  ngOnInit(): void {}

  enable() {
    this.invalid = true;
  }
  nable() {
    this.nvalid = true;
  }
  getdata(){
    this.valid=true;
  }
  // getcust(data:customer){

  //   if(data.cid===this.num){
  //     this.gcust.push(data);
  //   }
    
  // }
}
