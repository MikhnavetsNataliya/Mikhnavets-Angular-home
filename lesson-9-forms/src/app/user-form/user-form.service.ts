import {Injectable} from '@angular/core';
import {User} from "./model/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  user: User = {
    userData: {
      userName: '',
      email: '',
    },
    secret: ['What is your mom\'s maiden name?', 'What year did you go to school?', 'What is the name of the pet?'],
    questionAnswer: '',
    gender: ''
  };

  getUser(): User {
    return this.user;
  }
}