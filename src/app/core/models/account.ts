
export class AccountDto {
  id!:number;
  accountName!:string;
  createdAt!:Date;
  updateAt!:Date;
  isActive!:boolean;
  firstName!:string;
  lastName!:string;

}
export class UpdateAccountDto {
  firstName!:string;
  lastName!:string;
}
