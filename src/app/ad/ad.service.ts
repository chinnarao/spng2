import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { CustomHttpClient } from '../_core/custom-http-client';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { HttpHeaders } from '@angular/common/http';
import { AdModel } from '../_models/ad.model';
import { environment } from 'src/environments/environment';
import { HttpErrorHandler, HandleError } from '../_core/http-error-handler.service';

@Injectable()
export class AdService {

  private handleError: HandleError;

  constructor(private logger: NGXLogger, private http: CustomHttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AdService');
  }

  getAds(): Observable<AdModel[]> {
    const baseURL = environment.production ? 'https://localhost:44324/api/log' : '';
    const url = 'https://localhost:44324/api/log' + 'api/ads';

    return this.http.get<AdModel[]>('api/ads')
      .pipe(
        tap(heroes => console.log('fetched ads success')),
        catchError(this.handleError<AdModel[]>('getAds', [])
      )
    );
  }

  getAllAds(): Observable<AdModel[]> {
    const baseURL = environment.production ? 'https://localhost:44394/' : 'https://localhost:44394/';
    const url = baseURL + 'api/ad/getallads';

    return this.http.get<AdModel[]>(url)
      .pipe(
        tap(ads => {console.log('AdService:getallads:success'); console.log(ads); }),
        catchError(this.handleError<AdModel[]>('getAllAds', [])
      )
    );
  }
}
