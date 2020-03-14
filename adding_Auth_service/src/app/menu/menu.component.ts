import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  authServie: HardcodedAuthenticationService = null;
  constructor(hardcodedAuthenticationService: HardcodedAuthenticationService) {
    this.authServie = hardcodedAuthenticationService;
  }

  ngOnInit(): void {
  }

}
