import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { AssessmentActionTypes } from '../actions/assessment.action';
import { AssessmentService } from '../../services/assessment.service';

@Injectable()
export class AssessmentEffects {
  constructor(private actions$: Actions, private assessmentService: AssessmentService) { }

  @Effect()
  public loadAssessment$: Observable<any> = this.actions$.pipe(
    ofType(AssessmentActionTypes.LoadAssessment),
    mergeMap((action: any) => zip(
      this.assessmentService.getAssessment()
    ).pipe(
      map(([myAssessments]) => {
  
        return {
          type: AssessmentActionTypes.LoadAssessmentSuccess,
          payload: this.formatResponse(myAssessments)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myAssessments?: any[]): any {
    return {
      myAssessments
    };
  }
}