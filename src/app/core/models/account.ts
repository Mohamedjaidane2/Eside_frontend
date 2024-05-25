import {InformationDto} from "./information";

export class AccountDto {
  id!:number;
  accountName!:string;
  createdAt!:Date;
  updateAt!:Date;
  isActive!:boolean;
  firstName!:string;
  lastName!:string;
  stars!:number ;
  informationDto!:InformationDto;

}
export class UpdateAccountDto {
  firstName!:string;
  lastName!:string;
}
