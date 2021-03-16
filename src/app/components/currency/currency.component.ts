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
  conv!: string;
  tot!: number;
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
    console.log(this.from+" "+this.to);
    
    if(this.from=='indian' && this.to=='us'){
      this.tot=this.val1/73.45;
      this.conv=this.tot.toPrecision(8);
    }
    else if(this.from=='us' && this.to=='indian'){
      this.tot=this.val1*73.45;
      this.conv=this.tot.toPrecision(8);
    }
    else{
      this.conv=this.conv;
    }
  }

}
