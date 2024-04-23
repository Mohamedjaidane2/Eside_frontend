import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User_Login_Request, User_Register_Request, User_Response} from "../../../models/user";
import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";
import {AdvertisementDto} from "../../../models/advertisment";
import {CategoryDto, CategoryNewDto} from "../../../models/category";

export const CategoryActions= createActionGroup({
  source: 'CATEGORY',
  events:{
    Create:props <CategoryNewDto>(),
    'Create Success' : props<CategoryNewDto>(),
    'Create Failure' : props<{errors:BackendErrorInterface}>(),
    GetAll : emptyProps(),
    'GetAll Success' : props<{categories:CategoryDto[]}>(),
    'GetAll Failure' : props<{errors:BackendErrorInterface}>(),
  }
})
