import {Component, Input, OnInit} from '@angular/core';
import {OrderDto} from "../../../core/models/order";
import {OrderStatusEnum} from "../../../core/models/GlobalEnums";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {OrderService} from "../../../core/_services/order.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-order-status-time-line',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './order-status-time-line.component.html',
  styleUrl: './order-status-time-line.component.css'
})
export class OrderStatusTimeLineComponent implements OnInit{
  order!:OrderDto;
  id: string | null = null;
  activeStatus!: OrderStatusEnum ; // Default active status
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private orderService: OrderService,) {}

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }
  private subscribeToRouteParams(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.handleRouteParams(params);
    });
  }

  private handleRouteParams(params: ParamMap): void {
    if (params.has('id')) {
      this.id = params.get('id');
      if(this.id!=null){
        this.orderService.getOrderById(this.id).subscribe(value =>{
          this.order=value
          this.activeStatus=value.orderStatus
        } )

      }
    } else {
      console.error("'id' parameter is not provided in the route.");
    }
  }
  protected readonly OrderStatusEnum = OrderStatusEnum;
}
