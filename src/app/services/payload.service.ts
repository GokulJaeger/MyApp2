import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Payment from '../models/payment';

@Injectable({
  providedIn: 'root',
})
export class PayloadService {
  pay: Payment[] = [];
  payUrl: string = 'http://localhost:3000/payment';
  constructor(private http: HttpClient) {}

  public doPayload(): Promise<Payment[]> {
    return this.http.get<Payment[]>(this.payUrl).toPromise();
  }
  public addPayment(datas: Payment):Promise<Payment> {
    return this.http.post<Payment>(this.payUrl,datas).toPromise();
  }
}
