import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthStateInterface} from "../../statesInterfaces/Auth/authState.interface";
import {AuthActions} from "../../actions/Auth/actions";
const initialState:AuthStateInterface={
  isSubmitting:false,
  isLoading : false,
  userToken:undefined,
  validationErrors:null,
  currentUser:null,
  isAuthenticiated:false,
}

const authFeature = createFeature({
  name:"auth",
  reducer:createReducer(
    initialState,
//---------------------------------------------------------Register reducers---------------------------------------------------------

    on(AuthActions.register,(state)=>({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(AuthActions.registerSuccess,(state,action)=>({
      ...state,
      isSubmitting: true,
      userToken: action.token,
    })),
    on(AuthActions.registerFailure,(state,action)=>({
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
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting ,
  selectIsLoading,
  selectValidationErrors,
  selectCurrentUser,
  selectIsAuthenticiated,
  selectUserToken
} = authFeature
