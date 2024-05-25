import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthService} from "../../../_services/auth.service";
import {AuthActions} from "../../actions/Auth/auth.actions";
import {catchError, filter, map, of, pairwise, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {StorageService} from "../../../_services/storage.service";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {User_Response} from "../../../models/user";
import {Location} from '@angular/common';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {PreviousUrlService} from "./PreviousUrlService";


//REGISTER EFFECTS ----------------------------------------------------------------------------------------------------------------

export const redirectAfterRegisterEffects= createEffect((
  actions$ = inject(Actions),
  location=inject(Location) ,
  router = inject(Router),
) => {
  return actions$.pipe(
    ofType(AuthActions.registerSuccess),
    tap(()=>{
      //location.back();
      //router.navigate(['/mon-compte/mes-infos']);
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
export const redirectAfterLoginEffect = createEffect(
  () => {

    const router = inject(Router);
    const location = inject(Location);
    const previousUrlService = inject(PreviousUrlService);
    const route = inject(ActivatedRoute);
    const actions$ = inject(Actions);
    let returnUrl: string; // Default fallback to home
    returnUrl = route.snapshot.queryParams['returnUrl'] || '/';
    console.log("return url " + returnUrl);

    return actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => {
        const previousUrlBeforePrevious = previousUrlService.getPreviousUrlBeforePrevious();
        const previousUrl = previousUrlService.getPreviousUrl();
        console.log("previous url = "+previousUrl)
        console.log("previous prvious url = "+previousUrlBeforePrevious)
        if (previousUrl) {
          console.log("Previous URL before navigation back:", previousUrlBeforePrevious);
          if (previousUrlBeforePrevious === '#/activate-account') {
              router.navigate(["/"]).then(() => {
              // Success navigation to home
            });
          } else {
            router.navigate([previousUrl]).then(() => {
              // Success navigation to home
            });
            location.back();
          }
        }
        // router.navigateByUrl(returnUrl); // Navigate to the previous URL after login success
      })
    );
  },
  { functional: true, dispatch: false }
);
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
      router.navigate(['/connexion']);
      //storgeService.delete_user_token()
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
    switchMap((input)=>{
      return authService.getInfo(input.token).pipe(
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
