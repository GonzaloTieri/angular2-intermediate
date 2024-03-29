import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  
  constructor() { }
  login(userName: string, password: string) : void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

}
