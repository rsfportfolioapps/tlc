import { Action } from '@ngrx/store';
import { ProcessesPayloadCollection } from '../../models/processes.model';

export enum ProcessesActionTypes {
  LoadProcesses = '[Load Processes] Load Processes',
  LoadProcessesSuccess = '[Load Processes] Load Processes (success)'
}

export class LoadProcesses implements Action {
  readonly type = ProcessesActionTypes.LoadProcesses;
}

export class LoadProcessesSuccess implements Action {
  readonly type = ProcessesActionTypes.LoadProcessesSuccess;

  constructor(public payload: ProcessesPayloadCollection) { }
}

export type ProcessesActions = LoadProcesses | LoadProcessesSuccess;
