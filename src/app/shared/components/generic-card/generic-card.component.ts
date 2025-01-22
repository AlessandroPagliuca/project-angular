import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'shared-generic-card',
  imports: [MaterialModule, MatMenuModule, MatButtonModule],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.scss'

})
export class GenericCardComponent {

  @Input() name!: string;
  @Input() description!: string;

}
