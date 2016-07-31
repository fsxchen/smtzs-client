import {Component, ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
// import {AuthenticationService, User} from './authentication.service'

class User {
  username:string;
  password:string;
}

@Component({
  selector: 'login-form',
  providers: [],
  directives: [],
  styles: [require('./style.scss'), require('./normalize.scss')],
  template: require('./template.html')
})

export class LoginComponent {

  // public user = new User('','');
  public errorMsg = '';
  user: User;
  constructor(
    ) {}

  login() {
    console.log("login")
    // console.log(this.user.username)
    // if(!this._service.login(this.user)){
    //   this.errorMsg = 'Failed to login';
    // }
  }
}
