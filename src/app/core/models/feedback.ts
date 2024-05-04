
export class FeedBackDto {
  id!:number;
  description!:string
  Stars!:number;
  senderAccountName!:string
  reciverAccountName!:string
  creationDate!:Date
}

export class FeedBackNewDto {
  description!:string
  Stars!:number;
  senderAccountName!:string
  reciverAccountName!:string
}

export class ProductUpdateDto {
  description!:string
  Stars!:number;
}
