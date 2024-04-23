import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User_Login_Request, User_Register_Request, User_Response} from "../../../models/user";
import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";
import {AdvertisementDto, AdvertismentPaginationResponse} from "../../../models/advertisment";

export const AdsActions= createActionGroup({
  source: 'ADVERTISMENT',
  events:{
    RecentAds:props <{ accountId: string }>(),
    'RecentAds Success' : props<{ads:AdvertisementDto[]}>(),
    'RecentAds Failure' : props<{errors:BackendErrorInterface}>(),
    getAds:props <{ accountId: string, params:any }>(),
    'GetAds Success' : props<{response:AdvertismentPaginationResponse}>(),
    'GetAds Failure' : props<{errors:BackendErrorInterface}>(),
  }
})
