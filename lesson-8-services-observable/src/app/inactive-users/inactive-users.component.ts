import { Component, Input, Output, EventEmitter, } from '@angular/core';
import {User} from "../models/user.interface";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  @Input()
    item: User;
    
    @Output()
    changeState: EventEmitter<any> = new EventEmitter();

    onActiveChange() {
      this.changeState.emit(this.item);
    }
}
