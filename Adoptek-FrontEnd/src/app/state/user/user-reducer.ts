import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../user/user-action';
import { UserEntity } from 'src/app/domain/user-entity';
import { AuthResponse } from 'src/app/domain/auth-response';


export interface UserState {
    user: AuthResponse | null;
    loading: boolean;
    error: string | null;
  }

  export const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
  };

  export const userReducer = createReducer(
    initialState,
  
    on(UserActions.register, state => ({
      ...state,
      loading: true,
      error: null,

    })),
  
    on(UserActions.registerSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false
    })),
  
    on(UserActions.registerFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage,
        loading: false
    })),

    on(UserActions.login, state => ({
      ...state,
      loading: true,
      error: null,

    })),

    on(UserActions.loginSuccess, (state, { user }) => ({
      ...state,
      user,
      loading: false
    })),

    on(UserActions.loginFailure, (state, { errorMessage }) => ({
        ...state,
        error: errorMessage,
        loading: false
    })),
  

  );