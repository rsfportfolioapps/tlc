import { Action } from '@ngrx/store';

export enum QuestionActionTypes {
  LoadQuestion = '[Question] Load Question',
  LoadQuestionSuccess = '[Question] Load Question (success)'
}

export class LoadQuestion implements Action {
  readonly type = QuestionActionTypes.LoadQuestion;
}

export class LoadQuestionSuccess implements Action {
  readonly type = QuestionActionTypes.LoadQuestionSuccess;

  constructor(public payload: any) { }
}

export type QuestionActions = LoadQuestion | LoadQuestionSuccess;
