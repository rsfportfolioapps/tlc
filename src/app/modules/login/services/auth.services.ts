import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { retry, catchError, map, debounceTime } from 'rxjs/operators';

@Injectable()
export class AuthService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  public checkEmail(email: string): Observable<any> {
    return this.post(`api/user/exist?email=${email}`, {});
  }

  public login(payload: User): Observable<User> {
    // return this.post('TOKEN', payload).pipe(
    //   map(x => x.data), retry(3),
    //   catchError(this.handleError)
    // );
    return of({
      email: 'admin@tlc.com',
      firstName: 'Inbuilt',
      id: 'a67d8ee1-5815-435a-5445-08d6cfac4d9e',
      lastName: ' Administrator',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImE2N2Q4ZWUxLTU4MTUtNDM1YS01NDQ1LTA4ZDZjZmFjNGQ5ZSIsIm5iZiI6MTU2MjUwNDk5NiwiZXhwIjoxNTYzMTA5Nzk2LCJpYXQiOjE1NjI1MDQ5OTZ9.Sj1Muyzu7VDcHPMOqpnPDqYGrYDVirl4QkE4TjbYXNc'
    }).pipe(debounceTime(2000))
  }
}
