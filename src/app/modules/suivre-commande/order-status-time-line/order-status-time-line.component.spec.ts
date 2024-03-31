import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusTimeLineComponent } from './order-status-time-line.component';

describe('OrderStatusTimeLineComponent', () => {
  let component: OrderStatusTimeLineComponent;
  let fixture: ComponentFixture<OrderStatusTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderStatusTimeLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderStatusTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
