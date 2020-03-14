import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password): boolean {

    //console.log('bofore ' + this.isUserLoggedIn());
    if (username === 'vicxj' && password === 'hidden') {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('end ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (!(user === null)) {
      return true;
    }
    else
      return false;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

}
