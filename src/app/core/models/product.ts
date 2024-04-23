import {ColorEnum, ProductStatusEnum} from "./GlobalEnums";

export class ProductDto {
  id!:number;
  imageIds!:[number];
  productStatus!:ProductStatusEnum;
  categoryName!:string
  subcategoryName!:string
  color!:ColorEnum
  features!:string
  creationDate!:string
}

export class ProductNewDto {
  images!:[number];
  productStatus!:ProductStatusEnum;
  categoryId!:number
  SubcategoryId!:number
  color!:ColorEnum
  features!:string
}

export class ProductUpdateDto {
  images!:[number];
  productStatus!:ProductStatusEnum;
  categoryId!:number
  subcategoryId!:number
  color!:ColorEnum
  features!:string
}
