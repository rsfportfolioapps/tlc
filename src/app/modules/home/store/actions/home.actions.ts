import { Action } from '@ngrx/store';
import { HomePayloadCollection } from '../effects/home.effects';

export enum HomeActionTypes {
  LoadHome= '[Load Home] Load Home',
  LoadHomeSuccess = '[Load Home] Load Home (success)'
}

export class LoadHome implements Action {
  readonly type = HomeActionTypes.LoadHome;
}

export class LoadHomeSuccess implements Action {
  readonly type = HomeActionTypes.LoadHomeSuccess;

  constructor(public payload: HomePayloadCollection) { }
}

export type HomeActions = LoadHome | LoadHomeSuccess;
