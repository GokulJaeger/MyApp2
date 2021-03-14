import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid: string="";
  pwd: string="";
  
  auth!: Auth;
  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  handlelogin(){
    let auth={
     userid:this.uid,
     password:this.pwd,
     ts: new Date()
    };

    sessionStorage.setItem("Auth",JSON.stringify(auth));
    this.route.navigate(['dashboard']);
    console.log(auth);
    
  }
}
