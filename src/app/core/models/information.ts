export class InformationDto {
  id!:number;
  profilePicture!:string
  bio!:string
  phoneNumber!:string
  address!:string
  optionalAddress!:string
  postalCode!:number
  city!:string
  creationDate!:Date;
  updateDate!:Date;
  accountName!:string
  accountId!:number

}
export class InformationNewDto {
  accountId!:string
  profilePicture!:string
  bio!:string
  phoneNumber!:string
  address!:string
  optionalAddress!:string
  postalCode!:number
  city!:string
}
export class InformationUpdateDto {
  profilePicture!:string
  bio!:string
  phoneNumber!:string
  address!:string
  optionalAddress!:string
  postalCode!:number
  city!:string
}

