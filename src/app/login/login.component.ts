import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  error: string | undefined;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  login(){
    if(this.email == "test@gmail.com" && this.password == "12345"){
      this.router.navigate(['/home']);
    } else {
      this.error = "** Invalid Email or Password **";
    }
  }
}
