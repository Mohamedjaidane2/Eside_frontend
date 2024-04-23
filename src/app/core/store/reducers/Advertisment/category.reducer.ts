import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthActions} from "../../actions/Auth/auth.actions";
import {AdsStateInterface} from "../../statesInterfaces/Advertisment/adsState.interface";
import {AdsActions} from "../../actions/Advertisment/ads.actions";
import {CategoryStateInterface} from "../../statesInterfaces/Advertisment/categoryState.interface";
import {CategoryActions} from "../../actions/Advertisment/category.action";

const initialState:CategoryStateInterface={
  validationErrors:null,
  listCategories : []
}

const categoryFeature = createFeature({
  name:"category",
  reducer:createReducer(
    initialState,

//---------------------------------------------------------Create reducers---------------------------------------------------------

    on(CategoryActions.create,(state)=>({
      ...state,
      validationErrors: null,
    })),
    on(CategoryActions.createSuccess,(state,action)=>({
      ...state,
    })),
    on(CategoryActions.createFailure,(state,action)=>({
      ...state,
      validationErrors: action.errors,
    })),


//---------------------------------------------------------getAll reducers---------------------------------------------------------


    on(CategoryActions.getAll,(state)=>({
      ...state,
    })),
    on(CategoryActions.getAllSuccess,(state,action)=>({
      ...state,
      listCategories: action.categories
    })),
    on(CategoryActions.getAllFailure,(state)=>({
      ...state,
    })),


  )})


export const {
  name: categoryFeatureKey,
  reducer: categoryReducer,
  selectListCategories,

} = categoryFeature
