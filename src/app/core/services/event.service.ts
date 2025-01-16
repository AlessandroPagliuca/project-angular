import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentLocal } from '../../../environments/environment.local';
import { API_PATH } from '../../shared/enums/api-path';
import { Observable } from 'rxjs';
import { ModelEvent } from '../../shared/models/event/modelEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<ModelEvent[]> {
    return this.http.get<ModelEvent[]>(`${environmentLocal.API_URL}/${API_PATH.EVENTS}`);
  }

  // mock(): Observable<any> {
  //   return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/todos`);
  // }

}


