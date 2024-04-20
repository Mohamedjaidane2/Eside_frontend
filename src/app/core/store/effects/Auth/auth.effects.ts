import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthService} from "../../../_services/auth.service";
import {AuthActions} from "../../actions/Auth/auth.actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {StorageService} from "../../../_services/storage.service";
import {Router} from "@angular/router";
import {User_Response} from "../../../models/user";


//REGISTER EFFECTS ----------------------------------------------------------------------------------------------------------------

export const registerEffect= createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService),
  storgeService = inject(StorageService),
) => {
  return actions$.pipe(
    ofType(AuthActions.register),
    switchMap((userRegisterRequest)=>{
      return authService.register(userRegisterRequest).pipe(
        map((token:string)=>{
          storgeService.saveToken(token);
          return AuthActions.registerSuccess({token})
        }),
        catchError((errorResponse:HttpErrorResponse)=>{
          return of(
            AuthActions.registerFailure({
              errors:errorResponse.error
            }))
        })
      )
    })
  )
}, {functional:true})
export const redirectAfterRegisterEffects= createEffect((
  actions$ = inject(Actions),
  router = inject(Router),
) => {
  return actions$.pipe(
    ofType(AuthActions.registerSuccess),
    tap(()=>{
      router.navigate(['/mon-compte/mes-infos']);
    })
  )
}, {functional:true,dispatch:false})



//LOGIN EFFECTS ----------------------------------------------------------------------------------------------------------------


export const LoginEffect= createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService),
  storgeService = inject(StorageService),
) => {
  return actions$.pipe(
    ofType(AuthActions.login),
    switchMap((userLoginRequest)=>{
      return authService.login(userLoginRequest).pipe(
        map((token:string)=>{
          storgeService.saveToken(token);
          return AuthActions.loginSuccess({token})
        }),
        catchError((errorResponse:HttpErrorResponse)=>{
          return of(
            AuthActions.loginFailure({
              errors:errorResponse.error
            }))
        })
      )
    })
  )
}, {functional:true})
export const redirectAfterLoginEffect= createEffect((
  actions$ = inject(Actions),
  router = inject(Router),
) => {
  return actions$.pipe(
    ofType(AuthActions.loginSuccess),
    tap(()=>{
      router.navigate(['/accueil']);
    })
  )
}, {functional:true,dispatch:false})



//CHECK AUTH EFFECTS ----------------------------------------------------------------------------------------------------------------



export const CheckAuthEffect = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService),
  storgeService = inject(StorageService),
) => {
  return actions$.pipe(
    ofType(AuthActions.checkAuth),
    switchMap(()=>{
      return authService.checkAuth().pipe(
        map((isAuth:boolean)=>{
            return AuthActions.checkAuthSuccess({isAuth})

        }),
        catchError((errorResponse:HttpErrorResponse)=>{
          return of(
            AuthActions.checkAuthFailure({
              errors:errorResponse.error
            }))
        })
      )
    })
  )
}, {functional:true})

export const redirectAfterCheckAuthEffect= createEffect((
  actions$ = inject(Actions),
  router = inject(Router),
  storgeService = inject(StorageService),
) => {
  return actions$.pipe(
    ofType(AuthActions.checkAuthFailure),
    tap(()=>{
      router.navigate(['/']);
      storgeService.delete_user_token()
    })
  )
}, {functional:true,dispatch:false})


//GET USER INFO EFFECTS ----------------------------------------------------------------------------------------------------------------



export const getUserInfoEffect= createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService),
  storgeService = inject(StorageService),
) => {
  return actions$.pipe(
    ofType(AuthActions.getUserInfo),
    switchMap(()=>{
      return authService.getInfo().pipe(
        map((user:User_Response)=>{
          storgeService.saveUser(user);
          return AuthActions.getUserInfoSuccess({user})
        }),
        catchError((errorResponse:HttpErrorResponse)=>{
          return of(
            AuthActions.getUserInfoFailure({
              errors:errorResponse.error
            }))
        })
      )
    })
  )
}, {functional:true})
