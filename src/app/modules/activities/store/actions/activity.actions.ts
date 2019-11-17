import { Action } from '@ngrx/store';
import { ActivityPayloadCollection } from '../../models/activity.model';

export enum ActivityActionTypes {
  LoadActivity = '[Load Activity] Load Activity',
  LoadActivitySuccess = '[Load Activity] Load Activity (success)'
}

export class LoadActivity implements Action {
  readonly type = ActivityActionTypes.LoadActivity;
}

export class LoadActivitySuccess implements Action {
  readonly type = ActivityActionTypes.LoadActivitySuccess;

  constructor(public payload: ActivityPayloadCollection) { }
}

export type ActivityActions = LoadActivity | LoadActivitySuccess;
