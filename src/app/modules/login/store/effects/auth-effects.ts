import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActionTypes, LoginActionSuccess } from '../actions/auth-actions';
import { defer, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth-reducers';

@Injectable()
export class AuthEffects {
  constructor(private store: Store<AuthState>, private actions$: Actions) { }

  @Effect()
  init$ = defer(() => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') {
      this.store.dispatch(new LoginActionSuccess(JSON.parse(user)));
    }
  });

  @Effect({ dispatch: false })
  public login$ = this.actions$.pipe(
    ofType<LoginActionSuccess>(AuthActionTypes.LoginActionSuccess),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    })
  );
}
