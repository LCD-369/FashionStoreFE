import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  getUrl = 'http://localhost:3000/api/order/';
  putUrl = 'http://localhost:3000/api/order';

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

  //Submit completed order
  submitOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.putUrl, order)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Find & retreive order(s) by username
  findOrderByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.getUrl + email).pipe(catchError(this.handleError));
  }
}
