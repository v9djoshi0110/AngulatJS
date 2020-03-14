import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  name=''
  // dependency injection for name, passed in the URL (inside 'app-routing.module.ts' file)
  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.name=this.route.snapshot.params['name'] // this is key for the routing parameter defined in the URL path in app-routing.module.ts file
  }

}


