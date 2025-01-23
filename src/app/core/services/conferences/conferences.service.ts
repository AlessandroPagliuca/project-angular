import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentLocal } from '../../../../environments/environment.local';
import { API_PATH } from '../../../shared/enums/api-path';
import { catchError, Observable, of } from 'rxjs';
import { IConferences } from '../../../shared/models/conferences/conferences';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {
  constructor(private http: HttpClient) { }

  getAllConferences(): Observable<IConferences[]> {
    return this.http.get<IConferences[]>(`${environmentLocal.API_URL}/${API_PATH.CONFERENCES}`).pipe(
      catchError(error => {
        console.error('Errore durante la chiamata getAllConferences:', error);
        return of([]);
      })
    );
  }
}


