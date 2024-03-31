import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardHomeComponent } from './order-card-home.component';

describe('OrderCardHomeComponent', () => {
  let component: OrderCardHomeComponent;
  let fixture: ComponentFixture<OrderCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
