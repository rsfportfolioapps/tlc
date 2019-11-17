import { User } from '../../models/user.model';
import { AuthActionTypes, AuthActions } from '../actions/auth-actions';

export interface AuthState {
  user: User;
  isLoggedIn?: boolean;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: undefined
};

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.CheckEmailActionSuccess:
      return {
        user: action.payload.user,
      };

    case AuthActionTypes.LoginActionSuccess:
      return Object.assign({}, {
        user: action.payload.user,
        isLoggedIn: true
      });

    default:
      return state;
  }
}
