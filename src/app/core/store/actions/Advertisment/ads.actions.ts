import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User_Login_Request, User_Register_Request, User_Response} from "../../../models/user";
import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";
import {AdvertisementDto} from "../../../models/advertisment";

export const AdsActions= createActionGroup({
  source: 'ADVERTISMENT',
  events:{
    RecentAds:props <{ accountId: string }>(),
    'RecentAds Success' : props<{ads:[AdvertisementDto]}>(),
    'RecentAds Failure' : props<{errors:BackendErrorInterface}>(),
    Login : props <User_Login_Request>(),
    'Login Success' : props<{token:string}>(),
    'Login Failure' : props<{errors:BackendErrorInterface}>(),
    CheckAuth : emptyProps(),
    'CheckAuth Success' : props<{isAuth:boolean}>(),
    'CheckAuth Failure' : props<{errors:BackendErrorInterface}>(),
    GetUserInfo : emptyProps(),
    'GetUserInfo Success' : props<{user:User_Response}>(),
    'GetUserInfo Failure' : props<{errors:BackendErrorInterface}>(),
  }
})
