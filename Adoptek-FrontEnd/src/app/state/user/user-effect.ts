import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthenticatonService } from 'src/app/service/authenticaton.service';
import * as UserActions from '../user/user-action';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LocalStorgeService } from 'src/app/service/local-storge.service';
import { CheckJwtValidityService } from 'src/app/service/check-jwt-validity.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private authService:AuthenticatonService,
        private checkJwtValidityService: CheckJwtValidityService,
        private router : Router,
        private localStorageService: LocalStorgeService,
        private toastr: ToastrService
        ){}


    register$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.register),
        mergeMap(action => this.authService.register(action.user).pipe(
            map(user => {
                this.localStorageService.setToken(user.accessToken); // Call the saveToLocalStorage method from the LocalStorgeService
                return UserActions.registerSuccess({user});
            }),
            catchError((errorMessage) => [UserActions.registerFailure({errorMessage})])
        ))
    ));


    registerSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.registerSuccess),
        tap(() => this.router.navigate(['/putpet'])),
        tap(() => this.toastr.success('Registred Successful'))

    ), {dispatch: false});

    login$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.login),
        mergeMap(action => this.authService.login(action.user).pipe(
            map(user => {
                this.localStorageService.setToken(user.accessToken); // Call the saveToLocalStorage method from the LocalStorgeService
                return UserActions.loginSuccess({user})
            }),
            catchError((errorMessage) => [UserActions.loginFailure({errorMessage})])
        ))
    ));

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap(() => this.toastr.success('Login Successful')),
        tap(() => this.router.navigate(['/']))
    ), {dispatch: false});

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.logout),
        tap(() => this.router.navigate(['/'])),
        tap(() => this.localStorageService.clearLocalStorage()),
        tap(() => this.toastr.success('Logout Successful'))

    ), {dispatch: false});


    checkJwtValidity$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.checkJwtValidity),
        mergeMap(action => this.checkJwtValidityService.checkJwtValidity(action.token).pipe(
            map(() => UserActions.checkJwtValiditySuccess()),
            catchError((errorMessage) => [UserActions.checkJwtValidityFailure({errorMessage})])
        ))
    ));

    checkJwtValidityFailure$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.checkJwtValidityFailure),
        tap(() => this.router.navigate(['/'])),
        tap(() => this.localStorageService.clearLocalStorage()),
    ), {dispatch: false});


    checkJwtValiditySuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.checkJwtValiditySuccess),
    ), {dispatch: false});

}