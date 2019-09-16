import { Injectable } from '@angular/core';
import { User } from "../models/user.interface";
import { CounterService } from "./counter.service";

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private counterService: CounterService) { }
  users: User[] = [{
    name: 'Alex',
    status: true
  }, {
    name: 'John',
    status: true
  }, {
    name: 'Ivan',
    status: true
  }, {
    name: 'Maria',
    status: false
  }, {
    name: 'Hanna',
    status: false
  }, {
    name: 'Sandra',
    status: false
  }];

  getUser(): User[] {
    return this.users;
  }

  changeToInactive(event: User) {
    this.counterService.countChanges();
    for (let user of this.users) {
      if (user.status === true) {
        user.status = !user.status;
      }
    }
  }

  changeToActive(event: User) {
    this.counterService.countChanges();
    for (let user of this.users) {
      if (user.status === false) {
        user.status = !user.status;
      }
    }
  }
}