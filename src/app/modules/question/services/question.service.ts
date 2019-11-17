import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class QuestionService {
  public getQuestion(): Observable<any[]> {
    return of([]);
  }

}