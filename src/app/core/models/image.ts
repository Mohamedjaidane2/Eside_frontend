import {ProductDto} from "./product";

export class ImageDto{
  id!:number;
  name!:string;
  type!:string;
  path!:string;
  product!:ProductDto;
}
export class ImageResponseDto{
  name!:string;

}
export class ImageNewDto{
  name!:string;
  type!:string;
  path!:string;
}
