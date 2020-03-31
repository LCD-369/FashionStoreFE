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
findMemberByEmail(email: string): Observable<Member> {
    return this.http.get<Member>(this.getUrl+email).pipe(catchError(this.handleError));
}

//Create/add new member
addNewMember(member: Member): Observable<Member> {
  return this.http.post<Member>(this.postUrl, member)
    .pipe(
      catchError(this.handleError)
    );
}

}
