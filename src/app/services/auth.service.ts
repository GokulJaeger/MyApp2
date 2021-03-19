import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginUrl: string = "http://localhost:3000/auth";
  constructor(private http:HttpClient) {}

  public doAuth(u:string, p:string):Promise<Auth[]>{
    let url=this.loginUrl+"?userid="+u;
    return this.http.get<Auth[]>(url).toPromise();
  }
}
