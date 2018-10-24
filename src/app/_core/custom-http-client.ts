import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class CustomHttpClient extends HttpClient {

    constructor(httpHandler: HttpHandler) {
        super(httpHandler);
    }

    get<T>(url: string): Observable<T> {
        return super.get<T>(environment.apiUrl + '/' + url, { headers: this.getHeaders() });
    }

    post<T>(url: string, body: any): Observable<T> {
        return super.post<T>(environment.apiUrl + '/' + url, body, { headers: this.getHeaders() });
    }

    put<T>(url: string, body: string): Observable<T> {
        return super.put<T>(environment.apiUrl + '/' + url, body, { headers: this.getHeaders() });
    }

    delete<T>(url: string): Observable<T> {
        return super.delete<T>(environment.apiUrl + '/' + url, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return localStorage.getItem('access_token') != null
            ? new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('access_token') })
            : new HttpHeaders();
    }
}
