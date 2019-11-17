import { Action } from '@ngrx/store';

export enum AssessmentActionTypes {
  LoadAssessment = '[Assessment] Load Assessment',
  LoadAssessmentSuccess = '[Assessment] Load Assessment (success)'
}

export class LoadAssessment implements Action {
  readonly type = AssessmentActionTypes.LoadAssessment;
}

export class LoadAssessmentSuccess implements Action {
  readonly type = AssessmentActionTypes.LoadAssessmentSuccess;

  constructor(public payload: any) { }
}

export type AssessmentActions = LoadAssessment | LoadAssessmentSuccess;
