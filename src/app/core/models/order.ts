import {OrderStatusEnum} from "./GlobalEnums";

export class OrderDto {
  orderId!:number;
  orderDate!:Date;
  orderStatus!:OrderStatusEnum;
  advertisementId!:string
  senderId!:string
  reciverId!:string
}

export class OrderNewDto {
  advertisementId!:string
  accountId!:string
}
export class OrderUpdateDto {
  orderDate!:Date;
  totalPrice!:number;
  orderStatus!:OrderStatusEnum;
  advertisementId!:string
  accountId!:string
}

