import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthActions} from "../../actions/Auth/auth.actions";
import {AdsStateInterface} from "../../statesInterfaces/Advertisment/adsState.interface";
import {AdsActions} from "../../actions/Advertisment/ads.actions";

const initialState:AdsStateInterface={
  isSubmitting:false,
  validationErrors:null,
  recentAds : null
}

const adsFeature = createFeature({
  name:"ads",
  reducer:createReducer(
    initialState,

//---------------------------------------------------------Register reducers---------------------------------------------------------

    on(AdsActions.recentAds,(state)=>({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(AdsActions.recentAdsSuccess,(state,action)=>({
      ...state,
      isSubmitting: true,
      recentAds: action.ads
    })),
    on(AdsActions.recentAdsFailure,(state,action)=>({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),


//---------------------------------------------------------Login reducers---------------------------------------------------------


    on(AuthActions.login,(state)=>({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(AuthActions.loginSuccess,(state,action)=>({
      ...state,
      isSubmitting: true,
      userToken: action.token
    })),
    on(AuthActions.loginFailure,(state,action)=>({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),


//---------------------------------------------------------CheckAuth reducers---------------------------------------------------------


    on(AuthActions.checkAuth,(state)=>({
      ...state,
      isLoading: true
    })),
    on(AuthActions.checkAuthSuccess,(state,action)=>({
      ...state,
      isLoading: false,
      isAuthenticiated: action.isAuth,
    })),
    on(AuthActions.checkAuthFailure,(state)=>({
      ...state,
      isLoading: false,
      isAuthenticiated: false
    })),


//---------------------------------------------------------Get user Info reducers---------------------------------------------------------


    on(AuthActions.getUserInfo,(state)=>({
      ...state,
      isLoading: true,
    })),
    on(AuthActions.getUserInfoSuccess,(state,action)=>({
      ...state,
      isLoading: false,
      currentUser: action.user,
    })),
    on(AuthActions.getUserInfoFailure,(state)=>({
      ...state,
      isLoading: false,
    })),

  )

})

export const {
  name: adsFeatureKey,
  reducer: adsReducer,
  selectValidationErrors,
  selectRecentAds,
  selectIsSubmitting ,
} = adsFeature
