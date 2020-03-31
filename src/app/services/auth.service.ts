import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
  // A client-side or network error occurred. Handle it accordingly.
  console.error('An error occurred:', error.error.message);
} else {
  // The backend returned an unsuccessful response code.
  // The response body may contain clues as to what went wrong,
  console.error(
    `Backend returned code ${error.status}, ` +
    `body was: ${error.error}`);
}
  return throwError('A data error occurred, please try again.');
}

}
