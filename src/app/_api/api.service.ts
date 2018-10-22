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

    // read(parentId: number, id: number): Observable<T> {
    //     return this.httpClient
    //       .get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`)
    //       .map((data: any) => this.serializer.fromJson(data) as T);
    //   }

    public getQuery<T>(url: string, params): Observable<T> {
        return this.http.get<T>(url, {params});
    }

    public getSingle<T>(url: string, id: string): Observable<T> {
        return this.http.get<T>(url + id);
    }

    public create<T>(url: string,  data: any): Observable<T> {
        return this.http.post<T>(url, data);
    }

    public delete<T>(url: string, id: number): Observable<T> {
        return this.http.delete<T>(url + id);
    }

    // delete(parentId: number, id: number) {
    //     return this.httpClient
    //       .delete(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`);
    //   }

    public update<T>(url: string, id: number, itemToUpdate: any): Observable<T> {
        return this.http.put<T>(url + id, itemToUpdate);
    }
}
