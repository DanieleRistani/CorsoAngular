import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, NgForm, Validators,ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form-template-variable',
  standalone: true,   
  imports: [FormsModule,ReactiveFormsModule,NgClass,NgIf],
  templateUrl: './form-template-variable.component.html',
  styleUrl: './form-template-variable.component.css'
})
export class FormTemplateVariableComponent implements OnInit{
  @ViewChild("name") name! : ElementRef<HTMLInputElement> ;
  @ViewChild("form") form! : NgForm;
  
  userForm !: FormGroup;
  
  ngOnInit(): void {
    this.userForm  = new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      surename: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      age: new FormControl(null,[Validators.required,Validators.min(18),Validators.max(100)]),
    });
  }
   viewImputValue(){
    alert(this.name.nativeElement.value);
   }

   onSubmitForm(){
    console.log(this.form.value);
   }

   onSubmitUserFormGroup(){
    console.log(this.userForm.value);
   }
}
