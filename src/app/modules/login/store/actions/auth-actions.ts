import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum AuthActionTypes {
  CheckEmailActionSuccess = '[Login] Check Email Success',
  LoginActionSuccess = '[Login] Action Success',
}

export class CheckEmailActionSuccess implements Action {
  readonly type = AuthActionTypes.CheckEmailActionSuccess;

  constructor(public payload: { user: User }) {}
}

export class LoginActionSuccess implements Action {
  readonly type = AuthActionTypes.LoginActionSuccess;

  constructor(public payload: { user: User }) {}
}

export type AuthActions = CheckEmailActionSuccess | LoginActionSuccess;
