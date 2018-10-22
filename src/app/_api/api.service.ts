import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    public getAll<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    public getQuery<T>(url: string, params): Observable<T> {
        return this.http.get<T>(url, {params});
    }

    public getSingle<T>(url: string, id: string): Observable<T> {
        return this.http.get<T>(url + id);
    }

    public add<T>(url: string,  data: any): Observable<T> {    
        return this.http.post<T>(url, data);
    }

    public delete<T>(url: string, id: number): Observable<T> {
        return this.http.delete<T>(url + id);
    }

    public update<T>(url: string, id: number, itemToUpdate: any): Observable<T> {
        return this.http.put<T>(url + id, itemToUpdate);
    }
}
