import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthActions} from "../../actions/Auth/auth.actions";
import {AdsStateInterface} from "../../statesInterfaces/Advertisment/adsState.interface";
import {AdsActions} from "../../actions/Advertisment/ads.actions";

const initialState:AdsStateInterface={
  isSubmitting:false,
  validationErrors:null,
  recentAds : null,
  feedAds : null,
}

const adsFeature = createFeature({
  name:"ads",
  reducer:createReducer(
    initialState,

//---------------------------------------------------------recent ads reducers---------------------------------------------------------

    on(AdsActions.recentAds,(state)=>({
      ...state,
      validationErrors: null,
    })),
    on(AdsActions.recentAdsSuccess,(state,action)=>({
      ...state,
      recentAds: action.ads
    })),
    on(AdsActions.recentAdsFailure,(state,action)=>({
      ...state,
      validationErrors: action.errors,
    })),

 on(AdsActions.getAds,(state)=>({
      ...state,
      validationErrors: null,
    })),
    on(AdsActions.getAdsSuccess,(state,action)=>({
      ...state,
      feedAds: action.response
    })),
    on(AdsActions.getAdsFailure,(state,action)=>({
      ...state,
      validationErrors: action.errors,
    })),


  )

})

export const {
  name: adsFeatureKey,
  reducer: adsReducer,
  selectRecentAds,
  selectFeedAds,
} = adsFeature
