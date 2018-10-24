import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { CustomHttpClient } from '../_core/custom-http-client';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { HttpHeaders } from '@angular/common/http';
import { AdModel } from '../_models/ad.model';

@Injectable()
export class AdService {

  constructor(private logger: NGXLogger, private http: CustomHttpClient) {}

  getAds(): Observable<AdModel[]> {
    return this.http.get<AdModel[]>('api/ads')
      .pipe(
        tap(heroes => console.log('fetched ads success')),
        catchError(this.handleError('getAds', [])
      )
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error}`);
      return of(result as T);
    };
  }
}
