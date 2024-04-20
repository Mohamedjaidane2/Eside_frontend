import {AdvertisementSoldStatusEnum, AdvertisementStatusEnum} from "./GlobalEnums";
import {ProductDto} from "./product";

export class AdvertisementDto {
   id !:number;
   title!:string;
   description!:string;
   price!:number;
   oldPrice!:number;
   advertisementSoldStatusEnum !: AdvertisementSoldStatusEnum ;
   advertisementStatusEnum!:AdvertisementStatusEnum ;
   creationDate !:Date;
   updateDate!: Date;
   userAccountId!:number;
   product !:ProductDto;
   orderId!:number;
}
export class AdvertisementNewDto {

  title!:string;
  description!:string;
  accountId!:number;
  productId!:number;
  price!:number;

}
export class AdvertisementUpdateDto {

  title!:string;
  description!:string;
  price!:number;

}
