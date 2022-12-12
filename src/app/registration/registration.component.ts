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
  password: string | undefined;
  confirmPassword: string | undefined;

  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  submit(f: NgForm){
    if(!f.valid){
      return;
    }
    this.router.navigate(['/home']);
  }
}
