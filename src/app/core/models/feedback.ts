
export class FeedBackDto {
  id!:number;
  description!:string
  stars!:number;
  senderAccountName!:string
  reciverAccountName!:string
  creationDate!:Date
}

export class FeedBackNewDto {
  description!:string
  stars!:number;
  senderAccountName!:string
  reciverAccountName!:string
}

export class ProductUpdateDto {
  description!:string
  stars!:number;
}
