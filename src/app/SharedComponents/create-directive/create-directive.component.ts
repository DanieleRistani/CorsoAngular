import { Component } from '@angular/core';
import { HighlightDirective } from '../../Directives/highlight.directive';
@Component({
  selector: 'app-create-directive',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './create-directive.component.html',
  styleUrl: './create-directive.component.css'
})
export class CreateDirectiveComponent {

}
