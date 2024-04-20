import {User_Response} from "../../../models/user";
import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";

export interface AuthStateInterface {
  isSubmitting:boolean
  userToken : string | null | undefined
  isLoading : boolean
  validationErrors : BackendErrorInterface | null
  currentUser : User_Response | null
  isAuthenticiated : boolean
}
