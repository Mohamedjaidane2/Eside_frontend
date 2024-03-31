import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendedDiscountRequestComponent } from './sended-discount-request.component';

describe('SendedDiscountRequestComponent', () => {
  let component: SendedDiscountRequestComponent;
  let fixture: ComponentFixture<SendedDiscountRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendedDiscountRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendedDiscountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
