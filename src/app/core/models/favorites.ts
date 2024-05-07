export class FavortieDto {
  id!:number;
  creationDate!:Date;
  advertismentId!:number;
  accountId!:number;
}

export class NewFavoriteDto {
  advertismentId!:number;
  accountId!:number;
}
