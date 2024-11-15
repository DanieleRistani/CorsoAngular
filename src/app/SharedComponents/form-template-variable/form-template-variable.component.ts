import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../SharedEntity/User';

@Component({
  selector: 'app-form-template-variable',
  standalone: true,
  imports: [],
  templateUrl: './form-template-variable.component.html',
  styleUrl: './form-template-variable.component.css'
})
export class FormTemplateVariableComponent {
   @ViewChild("name") name! : ElementRef<HTMLInputElement> ;

   viewImputValue(){
    alert(this.name.nativeElement.value);
   }
}
