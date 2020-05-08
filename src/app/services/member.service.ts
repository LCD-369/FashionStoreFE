import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Member } from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  getUrl = 'http://localhost:3000/api/member/';
  postUrl = 'http://localhost:3000/api/member';
  putUrl = 'http://localhost:3000/api/member/update';

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
  //Find & retreive member by email
  findMemberByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.getUrl + email);
  }
  //Create/add new member
  addNewMember(member: any): Observable<any> {
    return this.http.post<any>(this.postUrl, member)
      .pipe(
        catchError(this.handleError)
      );
  }
  //Update current member
  updateMember(member: any): Observable<any> {
    return this.http.put<any>(this.putUrl, member)
      .pipe(
        catchError(this.handleError)
      );
  }

}
