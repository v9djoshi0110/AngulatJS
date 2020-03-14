import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'vicxj'
  password = 'hidden'
  errorMessage: string = 'Opps! Invalid Credentials.'
  invalidUser = false

  //dependency injection  ==> Router object is provided by angular container at run time.
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doLogin() {


    if (this.username === 'vicxj' && this.password === 'hidden') {
      this.router.navigate(['welcome', this.username])
      this.invalidUser = false
    }
    else {
      this.invalidUser = true
    }

  }
}
