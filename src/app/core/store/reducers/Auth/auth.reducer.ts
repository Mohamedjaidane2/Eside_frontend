import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthStateInterface} from "../../statesInterfaces/Auth/authState.interface";
import {AuthActions} from "../../actions/Auth/auth.actions";
const initialState:AuthStateInterface={
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
      validationErrors: null,
    })),
    on(AuthActions.registerSuccess,(state,action)=>({
      ...state,
      userToken: action.token,
    })),
    on(AuthActions.registerFailure,(state,action)=>({
      ...state,
      validationErrors: action.errors,
    })),


//---------------------------------------------------------Login reducers---------------------------------------------------------


    on(AuthActions.login,(state)=>({
      ...state,
      validationErrors: null,
    })),
    on(AuthActions.loginSuccess,(state,action)=>({
      ...state,
      userToken: action.token
    })),
    on(AuthActions.loginFailure,(state,action)=>({
      ...state,
      validationErrors: action.errors
    })),


//---------------------------------------------------------CheckAuth reducers---------------------------------------------------------


    on(AuthActions.checkAuth,(state)=>({
      ...state,
    })),
    on(AuthActions.checkAuthSuccess,(state,action)=>({
      ...state,
      isAuthenticiated: action.isAuth,
    })),
    on(AuthActions.checkAuthFailure,(state)=>({
      ...state,
      isAuthenticiated: false
    })),


//---------------------------------------------------------Get user Info reducers---------------------------------------------------------


    on(AuthActions.getUserInfo,(state)=>({
      ...state,
    })),
    on(AuthActions.getUserInfoSuccess,(state,action)=>({
      ...state,
      currentUser: action.user,
    })),
    on(AuthActions.getUserInfoFailure,(state)=>({
      ...state,
    })),

  )

})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectValidationErrors,
  selectCurrentUser,
  selectIsAuthenticiated,
  selectUserToken
} = authFeature
