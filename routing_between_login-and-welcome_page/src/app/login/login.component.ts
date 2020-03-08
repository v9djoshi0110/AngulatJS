import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string ='vicxj'
  password='hidden'
  errorMessage:string='Opps! Invalid Credentials.'
  invalidUser=false

  //dependency injection  ==> Router object is provided by angular container at run time.
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  doLogin(){
   
    //console.log(this.username)
    //console.log(this.password)
    if(this.username==='vicxj' && this.password==='hidden'){
      this.router.navigate(['welcome'])
      this.invalidUser=false
    }
    else{
      this.invalidUser=true
    }
   
  }
}
