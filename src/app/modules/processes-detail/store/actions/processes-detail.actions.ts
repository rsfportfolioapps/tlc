import { Action } from '@ngrx/store';

export enum ProcessesDetailActionTypes {
  LoadProcessesDetail= '[ProcessesDetail] Load ProcessesDetail',
  LoadProcessesDetailSuccess = '[ProcessesDetail] Load ProcessesDetail (success)'
}

export class LoadProcessesDetail implements Action {
  readonly type = ProcessesDetailActionTypes.LoadProcessesDetail;
}

export class LoadProcessesDetailSuccess implements Action {
  readonly type = ProcessesDetailActionTypes.LoadProcessesDetailSuccess;

  constructor(public payload: any) { }
}

export type ProcessesDetailActions = LoadProcessesDetail | LoadProcessesDetailSuccess;
