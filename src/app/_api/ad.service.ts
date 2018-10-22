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
    getAll() {
      console.log("aaaaaaaaaaaaaaa");
        this.dataService.getAll('api/ads/')
        .pipe(
            tap(data => {
                console.log("1111111111111111111111111111");
                console.log(JSON.stringify(data));
                console.log("222222222222222222222222222222");
              }),
            catchError(this.handleError1)
          );
        this.getIssues().pipe(
          tap( data => {
            console.log("bbbbbbbbbbbbbbb");
             console.log(data);
          }),
          catchError(this.handleError1)
        );
        console.log("ccccccccccccccccccccc");
    }

    getIssues(): Observable<Issue[]> {
      const endPoint = `${environment.baseURL}/issues`;
      return this.http.get<Issue[]>(endPoint);
    }

    private handleError1(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
      }

      private handleError<T> (operation = 'operation', result?: T) {
        return(error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
}
