import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { environment } from 'src/environments/environment';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError = <T>(operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
    constructor(private nGXLogger: NGXLogger) {}

    /** Create curried handleError function that already knows the service name */
    createHandleError = (serviceName = '') => <T>(operation = 'operation', result = {} as T) =>
        this.handleError(serviceName, operation, result);

    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
        return (error: HttpErrorResponse): Observable<T> => {
            console.error(error);
            let message =
                error.error instanceof ErrorEvent
                    ? error.error.message
                    : `server returned code ${error.status} with body "${error.error}"`;
            message = `${serviceName}: ${operation} failed: ${message}`;
            this.sendErrorToServer(message);
            // Let the app keep running by returning a safe result.
            // return of(result);
            return Observable.throw(error);
        };
    }

    private async sendErrorToServer(errors: string[] | string): Promise<boolean> {
        if (navigator.onLine) {
            try {
                let body;
                if (Array.isArray(errors)) {
                    body = `[${errors.join(',')}]`;
                } else {
                    body = `[${errors}]`;
                }

                const response = await fetch(`${environment.apiLogglyErrorURL}`, {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                });
                if (response.ok) {
                    console.log(
                        '%cAppGlobalErrorhandler success to send log report to loggly!!',
                        'color: green'
                    );
                    return true;
                }
            } catch (error) {
                this.nGXLogger.log('%cAppGlobalErrorhandler failed to send log report to api', 'color: red');
            }
        }
        return false;
    }
}
