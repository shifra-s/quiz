import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.user = {};
  }

  login() {
    this.loginService.login(this.user).subscribe(loginRes => {
      console.log(loginRes);
      this.router.navigate(['/quiz']);
    })
  }

  
}
