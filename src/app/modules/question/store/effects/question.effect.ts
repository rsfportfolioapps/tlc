import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, zip, Observable } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import { QuestionActionTypes } from '../actions/question.action';
import { QuestionService } from '../../services/question.service';

@Injectable()
export class QuestionEffects {
  constructor(private actions$: Actions, private questionService: QuestionService) { }

  @Effect()
  public loadQuestion$: Observable<any> = this.actions$.pipe(
    ofType(QuestionActionTypes.LoadQuestion),
    mergeMap((action: any) => zip(
      this.questionService.getQuestion()
    ).pipe(
      map(([myQuestions]) => {
  
        return {
          type: QuestionActionTypes.LoadQuestionSuccess,
          payload: this.formatResponse(myQuestions)
        };
      }),
      catchError(() => {
        return of({});
      })
    ))
  );

  private formatResponse(
    myQuestions?: any[]): any {
    return {
      myQuestions
    };
  }
}