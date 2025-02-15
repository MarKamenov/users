/**
 * Wrapper class for HttpClient to help
 * make strongly typed http requests.
 */

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {

  private readonly apiUrl = environment.apiBaseUrl;

  private readonly http = inject(HttpClient)
  /**
   * GET: get api request.
   *
   * @param {string} url api url
   * @param {{}} options http options
   * @returns {Observable<*>} get return value
   */
  public get = <T>(url: string, options?: Record<string, unknown>): Observable<T> =>
    this.http.get<T>(
      `${this.apiUrl}/${url}`, options).pipe(
        catchError(this.handleError),
      );

  /**
* POST: post api request.
*
* @param {string} url api url
* @param {*} body post body
* @param {{}} options http options
* @returns {Observable<*>} post return value
*/
  public post = <T>(url: string, body: unknown, options?: Record<string, unknown>): Observable<T> =>
    this.http.post<T>(`${this.apiUrl}/${url}`, body, options).pipe(
      catchError(this.handleError),
    );

  public patch = <T, B = unknown>(url: string, body?: B, options?: Record<string, unknown>): Observable<T> =>
    this.http.patch<T>(`${this.apiUrl}/${url}`, body, options).pipe(
      catchError(this.handleError),
    );

  public delete = <T>(url: string, options?: Record<string, unknown>): Observable<T> =>
    this.http.delete<T>(`${this.apiUrl}/${url}`, options).pipe(
      catchError(this.handleError),
    );

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }
}
