import {CategoryDto} from "./category";
import {ProductDto} from "./product";

export class SubCategoryDto{
  id!:number;
  name!:string;
  description!:string;
  //Category!:CategoryDto;
  creationDate!:Date;
}
export class SubCategoryNewDto{
  name!:string;
  description!:string;
  CategoryId!:number;
  creationDate!:Date;
}
export class SubCategoryUpdateDto{
  name!:string;
  description!:string;
  CategoryId!:number;
  creationDate!:Date;
}
