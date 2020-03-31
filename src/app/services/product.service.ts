import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getUrl = 'http://localhost:3000/api/products';

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

  //Find & retreive all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.getUrl)
      .pipe(catchError(this.handleError));
  }

  //Find & retreive all products by gender
  getProductsByGender(gender: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.getUrl + "/" + gender)
      .pipe(catchError(this.handleError));
  }

  //Find & retreive all products by category
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.getUrl + "/" + category)
      .pipe(catchError(this.handleError));
  }

}
