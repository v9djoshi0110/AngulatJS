import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string ='vicxj'
  password='hidden'

  constructor() { }

  ngOnInit(): void {
  }

  doLogin(){
    console.log(this.username)
    console.log(this.password)
  }
}
