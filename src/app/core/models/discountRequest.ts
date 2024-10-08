import {DiscountRequestStatus} from "./GlobalEnums";

export class DiscountRequestDto {
  id!:number;
  orderId!:number;
  requestedAmount!:number;
  discountRequestStatus!:DiscountRequestStatus;
  counterDiscountAmount!:number;
  requestDate!:Date;
  advertismentId!:number
  senderId!:number;
  reciverId!:number
}

export class DiscountRequestNewDto {
  orderId!:number;
  requestedAmount!:number;
}

export class DiscountRequestUpdateCounterDto {
  orderId!:number;
  counterDiscountAmount!:number;
}

export class DiscountRequestUpdateDto{
  orderId!:number;
  requestedAmount!:number;
}
