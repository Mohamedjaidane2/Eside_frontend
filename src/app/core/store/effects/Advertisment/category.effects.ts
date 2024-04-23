//REGISTER EFFECTS ----------------------------------------------------------------------------------------------------------------

import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AdsActions} from "../../actions/Advertisment/ads.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {AdsService} from "../../../_services/ads.service";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryActions} from "../../actions/Advertisment/category.action";
import {CategoryService} from "../../../_services/category.service";


export const getAllEffect= createEffect((
  actions$ = inject(Actions),
  categoryService = inject(CategoryService),
) => {
  return actions$.pipe(
    ofType(CategoryActions.getAll),
    switchMap((input)=>{
      return categoryService.getall().pipe(
        map((data)=>{
          return CategoryActions.getAllSuccess({categories:data})
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
