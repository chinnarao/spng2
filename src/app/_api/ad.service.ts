import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AdModel } from '../_models/ad.model';
import { throwError, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Issue, Hero } from '../_in-memory/in-memory-data.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AdService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private dataService: ApiService) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => console.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
