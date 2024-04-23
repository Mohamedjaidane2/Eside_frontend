//REGISTER EFFECTS ----------------------------------------------------------------------------------------------------------------

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AdsActions} from "../../actions/Advertisment/ads.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {AdsService} from "../../../_services/ads.service";
import {HttpErrorResponse} from "@angular/common/http";


export const recentAdsEffect= createEffect((
  actions$ = inject(Actions),
  adsService = inject(AdsService),
) => {
  return actions$.pipe(
    ofType(AdsActions.recentAds),
    switchMap((input)=>{
      return adsService.getTop10ByCreationDate(input.accountId).pipe(
        map((data)=>{
          return AdsActions.recentAdsSuccess({ads:data})
        }),
        catchError((errorResponse:HttpErrorResponse)=>{
          return of(
            AdsActions.recentAdsFailure({
              errors:errorResponse.error
            }))
        })
      )
    })
  )
}, {functional:true})
export const getAdsEffect= createEffect((
  actions$ = inject(Actions),
  adsService = inject(AdsService),
) => {
  return actions$.pipe(
    ofType(AdsActions.getAds),
    switchMap((input)=>{
      return adsService.getAllAdsByAccountId(input.accountId,input.params).pipe(
        map((data)=>{
          return AdsActions.getAdsSuccess({response:data})
        }),
        catchError((errorResponse:HttpErrorResponse)=>{
          return of(
            AdsActions.getAdsFailure({
              errors:errorResponse.error
            }))
        })
      )
    })
  )
}, {functional:true})
