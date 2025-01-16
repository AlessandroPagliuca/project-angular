import { Component } from '@angular/core';
import { ModelEvent } from '../../../shared/models/event/modelEvent';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  imports: [],
  providers: [EventService],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  protected eventList: ModelEvent[] = [];
  protected isLoading: boolean = false;

  constructor(private httpEvent: EventService) {
    this.getEvents();

  }

  ngOnInit(): void {
    if (this.isLoading) {
      this.getEvents();
    }
  }

  protected getEvents(): void {
    this.httpEvent.getAllEvents().subscribe(res => {
      if (res && Array.isArray(res) && res.length > 0) {
        this.eventList = res
        console.log(res)
      } else {
        this.isLoading = true;
        console.log(res)
      }
    });
  }
}
