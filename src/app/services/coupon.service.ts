import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Coupon } from '../models/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  getUrl = 'http://localhost:3000/api/coupon/';
  // getUrl = 'http://www.fashionrusbackend.com:3000/api/coupon/';
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
//Find & retreive coupon by couponcode
findCouponCode(code: string): Observable<Coupon> {
    return this.http.get<Coupon>(this.getUrl+code).pipe(catchError(this.handleError));
}

}
