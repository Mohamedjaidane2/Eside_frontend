export class CategoryDto {
  id!:number;
  name!:string;
  description!:string;
  creationDate!:Date;
}

export class CategoryNewDto {
  name!:string;
  description!:string;
  creationDate!:Date;
}
export class CategoryUpdateDto {
  name!:string;
  description!:string;
  creationDate!:Date;
}
