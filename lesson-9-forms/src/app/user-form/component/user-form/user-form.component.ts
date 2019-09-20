import { Component, Output, EventEmitter } from '@angular/core';

import {User} from "../../model/user.interface";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User;

  @Output()
  sendData: EventEmitter<User> = new EventEmitter<User>();

  submitData(user: User, isValid: boolean){
    if (isValid)
      this.sendData.emit(user);
  }
}
