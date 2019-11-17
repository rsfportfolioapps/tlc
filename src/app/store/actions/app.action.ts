import { Action } from '@ngrx/store';
import { AppPayloadCollection } from '../effects/app.effects';

export enum AppActionTypes {
  LoadApp = '[Load App] Load App',
  LoadAppSuccess = '[Load App] Load App (success)'
}

export class LoadApp implements Action {
  readonly type = AppActionTypes.LoadApp;
}

export class LoadAppSuccess implements Action {
  readonly type = AppActionTypes.LoadAppSuccess;

  constructor(public payload: AppPayloadCollection) { }
}

export type AppActions = LoadApp | LoadAppSuccess;
