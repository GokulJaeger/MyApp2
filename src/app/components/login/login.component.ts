import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid: string = "";
  pwd: string = "";

  auth!: Auth;
  constructor(private route: Router, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  handlelogin() {
    let auth = {
      userid: this.uid,
      password: this.pwd,
      ts: new Date()
    };
    this.authservice.doAuth(this.uid, this.pwd).then((a: Auth[]) => {
      console.log("Promise-->" + this.uid);
      console.log(a);
      console.log(a[0].password);
      
      if (this.pwd == a[0].password && this.uid == a[0].userid) {
        sessionStorage.setItem(this.uid, this.pwd);
        this.route.navigate(['dashboard']);
      }
      else{
        this.pwd = "";
        this.uid = "";
        this.route.navigate(['login']);
        alert("Invalid User or password");
      }
    }).catch((err) => {
      this.pwd = "";
      this.uid = "";
      this.route.navigate(['login']);
      alert("Invalid User or password");
      console.log("Error!" + err);

    });

  }
}
