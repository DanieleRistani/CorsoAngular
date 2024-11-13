import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSwitch } from '@angular/common';
import { NgSwitchDefault } from '@angular/common';
import { NgSwitchCase } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
//classi custom
import { User } from '../../SharedEntity/User';
//componenti figli
import { ChildOfBuildingComponent } from "../child-of-building/child-of-building.component";




@Component({
  selector: 'app-building',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgSwitch, NgSwitchDefault, NgSwitchCase, NgStyle, NgClass, ChildOfBuildingComponent],
  templateUrl: './building.component.html',
  styleUrl: './building.component.css'
})
export class BuildingComponent {


  title = 'Clicca qui';
  json : User[]=[{name:"Pippo",isOnline:true},{name:"Pluto",isOnline:false},{name:"Paperino",isOnline:false},{name:"Topolino",isOnline:true}];

  dynamicMessage= "";
  isImportant : Boolean =false;

  isDisable : Boolean =false;
  title2= this.isDisable ? "abilita" : "disabilita";

  ngSwitch : Number=1;
  number=0;
  
  stringByChild : string="";
  
  btnClick() {
    alert("Hello, CorsoAngular");
  }

  btnClick2() {
    this.isDisable=!this.isDisable;
    this.title2= this.isDisable ? "abilita" : "disabilita";
  }

  btnClick3(){
    this.isImportant=!this.isImportant;
  }
  returnString(){
    return "Hello, CorsoAngular";
  }
  ReceiveDataFromChild(string : string){ {
    this.stringByChild=string;
  }
}}


