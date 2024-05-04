
export class AccountDto {
  id!:number;
  accountName!:string;
  createdAt!:Date;
  updateAt!:Date;
  isActive!:boolean;

}

export class UpdateAccountDto {
  firstName!:string;
  lastName!:string;
}
