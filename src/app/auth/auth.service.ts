import { Injectable } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private userService : UserServiceService) { }

  isAuth() : boolean{
    return this.userService.getUser(0).isOnline;
  }
}
