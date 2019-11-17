import { Action } from '@ngrx/store';

export enum LearningActionTypes {
  LoadLearning= '[Load Learning] Load Learning',
  LoadLearningSuccess = '[Load Learning] Load Learning (success)'
}

export class LoadLearning implements Action {
  readonly type = LearningActionTypes.LoadLearning;
}

export class LoadLearningSuccess implements Action {
  readonly type = LearningActionTypes.LoadLearningSuccess;

  constructor(public payload: any) { }
}

export type LearningActions = LoadLearning | LoadLearningSuccess;
