import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import fraudpayment from '../models/fraudpayment';
import payment from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class FraudpayService {

  payUrl: string = 'http://localhost:3000/payment';
  constructor(private http:HttpClient) { }
  getfpaydatas():Observable<fraudpayment[]>{
    return this.http.get<fraudpayment[]>(this.payUrl);
  }

}
