import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";
import {AdvertisementDto} from "../../../models/advertisment";
import {CategoryDto} from "../../../models/category";

export interface CategoryStateInterface {
  validationErrors : BackendErrorInterface | null
  listCategories : CategoryDto[]
}
