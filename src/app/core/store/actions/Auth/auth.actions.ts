import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User_Login_Request, User_Register_Request, User_Response} from "../../../models/user";
import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";

export const AuthActions= createActionGroup({
  source: 'Auth',
  events:{
    Register:props <User_Register_Request>(),
    'Register Success' : props<{token:string}>(),
    'Register Failure' : props<{errors:BackendErrorInterface}>(),
    Login : props <User_Login_Request>(),
    'Login Success' : props<{token:string}>(),
    'Login Failure' : props<{errors:BackendErrorInterface}>(),
    CheckAuth : emptyProps(),
    'CheckAuth Success' : props<{isAuth:boolean}>(),
    'CheckAuth Failure' : props<{errors:BackendErrorInterface}>(),
    GetUserInfo : props <{ token: string }>(),
    'GetUserInfo Success' : props<{user:User_Response}>(),
    'GetUserInfo Failure' : props<{errors:BackendErrorInterface}>(),
  }
})
