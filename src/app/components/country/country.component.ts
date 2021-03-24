import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Country from 'src/app/models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {


  gcname:string="";
  invalid:boolean=false;
  nvalid:boolean=false;
  countryUrl:string="http://localhost:3000/country"
  cntry:Country[]=[];
  cntry2:Country[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  currencytype(val:any){
    console.log(val.target.value);
    
    let url=this.countryUrl+"?country_currency="+val.target.value;
    console.log(url);
    
    this.http.get<Country[]>(url).toPromise().then((cnt:Country[])=>{
      this.cntry=cnt;
    });
    this.invalid=true;
  }
  getname(){
    console.log(this.gcname);
    
    let url=this.countryUrl+"?customer_name="+this.gcname;
    console.log(url);
    this.http.get<Country[]>(url).toPromise().then((cnt2:Country[])=>{
      this.cntry2=cnt2;
    });
    this.nvalid=true;
  }
}
