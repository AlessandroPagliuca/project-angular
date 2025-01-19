import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentLocal } from '../../../environments/environment.local';
import { API_PATH } from '../../shared/enums/api-path';
import { catchError, finalize, Observable, of } from 'rxjs';
import { ModelEvent } from '../../shared/models/event/modelEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<ModelEvent[]> {
    return this.http.get<ModelEvent[]>(`${environmentLocal.API_URL}/${API_PATH.EVENTS}`).pipe(
      catchError(error => {
        console.error('Errore durante la chiamata getAllEvents:', error);
        return of([]);
      })
    );
  }
}


