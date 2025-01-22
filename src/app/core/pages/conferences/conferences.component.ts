import { Component, OnInit } from '@angular/core';
import { IConferences } from '../../../shared/models/conferences/conferences';
import { ConferencesService } from '../../services/conferences/conferences.service';
import { GenericCardComponent } from '../../../shared/components/generic-card/generic-card.component';

@Component({
  selector: 'app-events',
  imports: [GenericCardComponent],
  templateUrl: './conferences.component.html',
  styleUrl: './conferences.component.scss'
})
export class ConferencesComponent implements OnInit {
  protected eventList: IConferences[] = [];
  protected isLoading: boolean = true;

  constructor(private httpEvent: ConferencesService) {
  }

  ngOnInit(): void {
    this.getAllConferences();
  }

  private getAllConferences(): void {
    this.httpEvent.getAllConferences().subscribe({
      next: (res) => {
        if (res && Array.isArray(res) && res.length > 0) {
          this.eventList = res;
          this.isLoading = false;
          console.log('res Conferences:', res);
        }
      },
    });
  }
}