import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor : any = false;
  
  constructor(private element: ElementRef) { 
    if(this.highlightColor){
      this.element.nativeElement.style.color = 'red';
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.highlightColor){
      
      this.element.nativeElement.style.backgroundColor = 'blue';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.highlightColor){
      this.element.nativeElement.style.backgroundColor = 'transparent';
    }
    
  }
}
