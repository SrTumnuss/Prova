import { CommonModule } from '@angular/common';
import{Component, Input, isStandalone} from '@angular/core';


@Component({
  selector: 'app.component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-component.html',
  styleUrl:'./meu-component.css'

})

export class CompartilharMeuComponent {
  @Input() interesses:any = [];
}
