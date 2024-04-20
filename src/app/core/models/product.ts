import {ColorEnum, ProductStatusEnum} from "./GlobalEnums";

export class ProductDto {
  id!:number;
  imageIds!:[number];
  ProductStatus!:ProductStatusEnum;
  categoryName!:string
  SubcategoryName!:string
  color!:ColorEnum
  features!:string
  creationDate!:string
}

export class ProductNewDto {
  images!:[number];
  ProductStatus!:ProductStatusEnum;
  categoryId!:number
  SubcategoryId!:number
  color!:ColorEnum
  features!:string
}

export class ProductUpdateDto {
  images!:[number];
  ProductStatus!:ProductStatusEnum;
  categoryId!:number
  SubcategoryId!:number
  color!:ColorEnum
  features!:string
}
