import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../SharedEntity/User';

@Component({
  selector: 'app-details-user',
  standalone: true,
  imports: [],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.css'
})
export class DetailsUserComponent implements OnInit {
  
  id : any;
  user :any;
  constructor(private serviceUser:UserServiceService, private route :ActivatedRoute) { }
  
 
  ngOnInit(): void {
   
    this.route.paramMap.subscribe((params : ParamMap) =>{
      this.id=params.get('id')
      this.user=this.serviceUser.getUser(this.id);
    });
   
  };

 
}
