import { Component } from '@angular/core';
import {User} from './models/user.interface';
import {UsersService} from "./services/users.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users: User[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getUser();
  }

  changeToActive(event: User) {
    for (let user of this.users) {
      this.userService.changeToActive(user);
    }
  }

  changeToInactive(event: User) {
    for (let user of this.users) {
      this.userService.changeToInactive(user);
    }
  }
}
