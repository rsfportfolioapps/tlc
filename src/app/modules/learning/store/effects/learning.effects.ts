import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { Learning } from '../../models/learning.model';
import { LearningService } from '../../services/learning.service';
import { LearningActionTypes } from '../actions/learning.actions';

export interface LearningPayloadCollection {
  assignedLearning: Learning[];
}

@Injectable()
export class LearningEffects {
  constructor(private actions$: Actions, private learningService: LearningService) { }

  @Effect()
  public loadLearning$: Observable<any> = this.actions$.pipe(
    ofType(LearningActionTypes.LoadLearning),
    mergeMap((action: any) => zip(
      this.learningService.getAssignedLearnings(),
      this.learningService.getLearnMore()
    ).pipe(
      map(([assignedLearning, learnMore]) => {
        return {
          type: LearningActionTypes.LoadLearningSuccess,
          payload: this.formatResponse(assignedLearning, learnMore)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    assignedLearning?: Learning[],
    learnMore?: Learning[]): any {
    return {
      assignedLearning,
      learnMore
    };
  }
}