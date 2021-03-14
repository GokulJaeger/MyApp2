import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  val1!: number;
  from!: string;
  to!: string;
  conv!: number;
  constructor() { }

  ngOnInit(): void {
  }
  fromcurrency(fe:any){
    this.from=fe.target.value;

  }
  tocurrency(te:any){
    this.to=te.target.value;
  }
  handleconvert(){
    if(this.from=='indian' && this.to=='us'){
      this.conv=this.val1*73.45;
    }
    else if(this.from=='indian' && this.to=='us'){
      this.conv=this.val1/73.45;
    }
    else{
      this.conv=this.conv;
    }
  }

}
