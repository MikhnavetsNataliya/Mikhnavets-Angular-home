import { Component, Input, Output, EventEmitter, } from '@angular/core';
import {User} from "../models/user.interface";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  @Input()
  item: User;
  
  @Output()
  changeState: EventEmitter<any> = new EventEmitter();

  onInactiveChange() {
    this.changeState.emit(this.item);
  }
}