import {BackendErrorInterface} from "../../../../shared/types/backendError.interface";
import {AdvertisementDto} from "../../../models/advertisment";

export interface AdsStateInterface {
  isSubmitting:boolean
  validationErrors : BackendErrorInterface | null
  recentAds : AdvertisementDto[] | null
  feedAds : {
    "totalItems": number,
    "advertisments": AdvertisementDto[],
    "totalPages": number,
    "currentPage": number
  } | null
}
