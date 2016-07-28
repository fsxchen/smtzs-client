import {Component, ElementRef} from '@angular/core';
// import {AuthenticationService, User} from './authentication.service'


@Component({
  selector: 'login-form',
  providers: [],
  styles: [require('./style.scss'), require('./normalize.scss')],
  template: require('./template.html')
})

export class LoginComponent {

  // public user = new User('','');
  public errorMsg = '';

  constructor(
    ) {}

  login() {
    console.log("login")
    // if(!this._service.login(this.user)){
    //   this.errorMsg = 'Failed to login';
    // }
  }
}
