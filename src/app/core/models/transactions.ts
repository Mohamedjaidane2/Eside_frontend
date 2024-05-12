export class TransactionDto{
  id!:number;
  transaction_date!:Date;
  action!:string;
  walletId!:number;
  amount!:number;
  balanceBeforeAction!:number;
  current_balance!:number;
  is_canceled!:boolean;

}
