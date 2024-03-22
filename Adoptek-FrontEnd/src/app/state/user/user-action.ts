import { createAction, props } from '@ngrx/store';
import { AuthResponse } from 'src/app/domain/auth-response';
import { UserEntity } from 'src/app/domain/user-entity';
import { UserEntityLogin } from 'src/app/domain/user-entity-login';

export const login = createAction(
  '[User] Login',
  props<{ user: UserEntityLogin }>()
);

export const logout = createAction('[User] Logout');

export const register = createAction(
  '[User] Register',
  props<{ user: UserEntity }>()
);

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ user: AuthResponse }>()
);

export const loginFailure = createAction(
  '[User] Login Failure',
  props<{ errorMessage: string }>()
);

export const registerSuccess = createAction(
  '[User] Register Success',
  props<{ user: AuthResponse }>()
);

export const registerFailure = createAction(
  '[User] Register Failure',
  props<{ errorMessage: string }>()
);

export const checkJwtValidity = createAction(
  '[User] Check Jwt Validity',
  props<{ token: string }>()
);

export const checkJwtValiditySuccess = createAction(
  '[User] Check Jwt Validity Success'
);

export const checkJwtValidityFailure = createAction(
  '[User] Check Jwt Validity Failure',
  props<{ errorMessage: string }>()
);

export const getUser = createAction('[User] Get User');

export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{ user: any }>()
);

export const getUserFailure = createAction(
  '[User] Get User Failure',
  props<{ errorMessage: string }>()
);

export const getAllUsers = createAction('[User] Get All Users');

export const getAllUsersSuccess = createAction(
  '[User] Get All Users Success',
  props<{ users: UserEntity[] }>()
);

export const getAllUsersFailure = createAction(
  '[User] Get All Users Failure',
  props<{ errorMessage: string }>()
);

export const promoteUserToAdmin = createAction(
  '[User] Promote User To Admin',
  props<{ email: string }>()
);

export const promoteUserToAdminSuccess = createAction(
  '[User] Promote User To Admin Success'
);

export const promoteUserToAdminFailure = createAction(
  '[User] Promote User To Admin Failure',
  props<{ errorMessage: string }>()
);
