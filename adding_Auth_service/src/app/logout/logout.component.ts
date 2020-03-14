import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authServie:HardcodedAuthenticationService) { }  //dependency injection

  ngOnInit(): void {
    this.authServie.logout();  // At the time of component initialization, we remove the item from sessionStorege.
  }

}
