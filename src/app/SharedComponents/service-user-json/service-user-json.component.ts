import { Component } from '@angular/core';
import { NgFor,NgIf,NgStyle } from '@angular/common';
import { UserServiceService } from '../../Services/user-service.service';
import { OnInit } from '@angular/core';
import { User } from '../../SharedEntity/User';
import { RouterLink,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-service-user-json',
  standalone: true,
  imports: [NgFor,NgIf,NgStyle,RouterLink,RouterOutlet],
  templateUrl: './service-user-json.component.html',
  styleUrl: './service-user-json.component.css'
})
export class ServiceUserJsonComponent implements OnInit {
   
  users : User[]=[];

  constructor( private userService : UserServiceService) { }
  ngOnInit(): void {
    this.users=this.userService.getUsers();
  }
  
}
