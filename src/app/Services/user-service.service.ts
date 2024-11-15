import { Injectable } from '@angular/core';
import { User } from '../SharedEntity/User';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  constructor( ) { }

  users : User[]=[{name:"Pippo",isOnline:false},{name:"Pluto",isOnline:false},{name:"Paperino",isOnline:false},{name:"Topolino",isOnline:true}];
  getUsers(){
    return this.users;
  }

  getUser(id : number){
    return this.users[id];
  }
}
