import {User_Response} from "../../../models/user";
import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";

export interface AuthStateInterface {
  userToken : string | null | undefined
  validationErrors : BackendErrorInterface | null
  currentUser : User_Response | null
  isAuthenticiated : boolean
}
