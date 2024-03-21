import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../user/user-action';
import { UserEntity } from 'src/app/domain/user-entity';
import { AuthResponse } from 'src/app/domain/auth-response';


export interface UserState {
    user: AuthResponse | null;
    userInfo: UserEntity | null;
    users: UserEntity[];
    loading: boolean;
    error: string | null;
  }

  export const initialState: UserState = {
    user: null,
    users: [],
    userInfo: null,
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
  
    on(UserActions.getUser, state => ({
      ...state,
      loading: true,
      error: null
    })),

    on(UserActions.getUserSuccess, (state, { user }) => ({

      ...state,
      userInfo: user,
      loading: false
    })
    
       
      ),
    on(UserActions.logout, state => ({
        ...state,
        user: null,
        userInfo: null,
        loading: false,
        error: null
      })),

      on(UserActions.getAllUsers, state => ({
        ...state,
        loading: true,
        error: null
        })),

        on(UserActions.getAllUsersSuccess, (state, { users }) => ({
          ...state,
          users,
          loading: false
        })),

        
    

  );

