import { Component, OnInit } from '@angular/core';
import { ModelEvent } from '../../../shared/models/event/modelEvent';
import { EventService } from '../../services/event.service';
import { CardWithBtnTitleComponent } from "../../../shared/components/card-with-btn-title/card-with-btn-title.component";

@Component({
  selector: 'app-events',
  imports: [CardWithBtnTitleComponent],
  providers: [EventService],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  protected eventList: ModelEvent[] = [];
  protected isLoading: boolean = true;

  constructor(private httpEvent: EventService) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  protected getEvents(): void {
    this.httpEvent.getAllEvents().subscribe({
      next: (res) => {
        if (res && Array.isArray(res) && res.length > 0) {
          this.eventList = res;
          this.isLoading = false;
          console.log('Eventi ricevuti:', res);
        }
      },
    });
  }
}