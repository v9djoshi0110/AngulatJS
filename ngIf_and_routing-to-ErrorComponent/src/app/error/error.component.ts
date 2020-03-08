import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage="Opps! Wrong URL...Please contact support team."

  constructor() { }

  ngOnInit(): void {
  }

}
