import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgFor,NgIf,NgStyle } from '@angular/common';
import { User } from '../../SharedEntity/User';
@Component({
  selector: 'app-child-of-building',
  standalone: true,
  imports: [NgFor,NgIf,NgStyle],
  templateUrl: './child-of-building.component.html',
  styleUrl: './child-of-building.component.css'
})

// con la implementazione di Oninit posso andare a predisporre comportamenti al caricamento del componente
export class ChildOfBuildingComponent implements OnInit {
  
  @Input() jsonOnChild:User[]=[];
  @Output() outputString= new EventEmitter<string>();

  SendDataToParent(){
    this.outputString.emit("Ciao sono stato passato da tuo figlio");
  }
  ngOnInit(): void {
    console.log(this.jsonOnChild);
  }
}
