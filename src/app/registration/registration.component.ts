import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: string | undefined;
  email: string | undefined;
  passowrd: string | undefined;
  confirmPassword: string | undefined;

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  submit(f: NgForm){
    if(f.invalid){
      return;
    }
    this.router.navigate(['/popular']);
  }
}
