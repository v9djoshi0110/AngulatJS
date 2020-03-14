import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>{{ title }} app is running!</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'todo';
  testInterpolation='Hello! Good Evening Sir.';
}
