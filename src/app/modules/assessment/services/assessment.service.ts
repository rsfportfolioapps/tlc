import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AssessmentService {
  public getAssessment(): Observable<any[]> {
    return of([]);
  }

}