import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'shared-card-with-btn-title',
  imports: [MaterialModule, MatMenuModule, MatButtonModule],
  templateUrl: './card-with-btn-title.component.html',
  styleUrl: './card-with-btn-title.component.scss'
})
export class CardWithBtnTitleComponent {

  @Input() name!: string;
  @Input() description!: string;

}
