import {TransactionDto} from "./transactions";

export class CreatePaymentDto{
  amount!:number;
}
export class WalletDto{
  id!:number;
  balance!:number;
  accountId!:number;
  creationDate!:Date;
  transactions!:TransactionDto[]
}
export class WalletActionDto{
  amount!:number;
  walletId!:number;

}
export class WalletUpdateDto{
  balance!:number;
  transactions!:TransactionDto[]

}
export class ResponsePayment{
  link!:string;
  payment_id!:string
  developer_tracking_id!:string
  success!:boolean

}
