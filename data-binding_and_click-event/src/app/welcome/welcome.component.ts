//package com.vicxj

//import com.vicxj.service
import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../app.component';     ---> if we want to use the class from external comoponent.


// @ComponentScan(vlaue="com.vicxj")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class WelcomeComponent implements SomeInterface{....}
export class WelcomeComponent implements OnInit {            // export is similar to public in java

   // String message =" This is a simple message."   ---> in java
    message:String ='This is a simple meassge.'   //typeScript way declaration



  // public WelcomeComponent(){......}
  constructor() { }

  //public void init(){...}
  ngOnInit(): void {

    //this.message=5;  --> we will get compiletime error bcz typeScript is strongly typed language. 

    console.log(this.message)
  }

}

export class Class1{

}

export class Class2{

}
