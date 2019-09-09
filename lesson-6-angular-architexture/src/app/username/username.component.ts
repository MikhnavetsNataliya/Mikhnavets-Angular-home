import { Component } from '@angular/core';

@Component({
  selector: 'my-username',
  templateUrl: './username.component.html',
  styleUrls: [ './username.component.css' ]
})
export class UserNameComponent  {
  title: string = 'Task 2';
  public username: string = 'Enter user name';
    
  constructor() {}

  handleClick(){
    if (this.username.length >0){
      this.username = '';
      
    }
  }
}