import { Component, OnInit } from '@angular/core';

import {User} from "../../model/user.interface";

import { UserFormService } from '../../user-form.service';


@Component({
  selector: 'app-user-form-viewer',
  templateUrl: './user-form-viewer.component.html',
  styleUrls: ['./user-form-viewer.component.css']
})
export class UserFormViewerComponent implements OnInit {
  user:User;
  constructor(private userFormService: UserFormService ) { }

  ngOnInit() {
    this.user = this.userFormService.getUser();
  }

  nameSuggest() {
    this.user.userData.userName = 'User';
  }
}
