import {AdvertisementDto} from "../../core/models/advertisment";

export interface groupeByCategoryInterface {
  category: string;
  advertisment: AdvertisementDto[];
}
