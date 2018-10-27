import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { CustomHttpClient } from '../_core/custom-http-client';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { HttpHeaders } from '@angular/common/http';
import { AdModel } from '../_models/ad.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdService {

  constructor(private logger: NGXLogger, private http: CustomHttpClient) {}

  getAds(): Observable<AdModel[]> {
    const baseURL = environment.production ? 'https://localhost:44324/api/log' : '';
    const url = 'https://localhost:44324/api/log' + 'api/ads';

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
