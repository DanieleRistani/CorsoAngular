import { Injectable } from '@angular/core';
import { User } from '../SharedEntity/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {

  constructor(private http : HttpClient ) { }
  
 
  users : User[]=[{name:"Pippo",isOnline:false},{name:"Pluto",isOnline:false},{name:"Paperino",isOnline:false},{name:"Topolino",isOnline:true}];
  getUsers(){
    return this.users;
  }
  getUsersByDb():Observable<any>{
     return this.http.get('https://jsonplaceholder.typicode.com/users');
    
  }
  getUser(id : number){
    return this.users[id];
  }
}
