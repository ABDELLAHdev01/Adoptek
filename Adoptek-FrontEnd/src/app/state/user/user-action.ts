import { createAction , props } from "@ngrx/store";
import { AuthResponse } from "src/app/domain/auth-response";
import { UserEntity } from "src/app/domain/user-entity";
import { UserEntityLogin } from "src/app/domain/user-entity-login";


export const login = createAction(
    '[User] Login',
    props<{ user: UserEntityLogin }>()
);

export const logout = createAction(
    '[User] Logout'
);

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