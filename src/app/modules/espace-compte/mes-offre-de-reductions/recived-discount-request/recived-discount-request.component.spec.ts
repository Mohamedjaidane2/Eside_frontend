import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivedDiscountRequestComponent } from './recived-discount-request.component';

describe('RecivedDiscountRequestComponent', () => {
  let component: RecivedDiscountRequestComponent;
  let fixture: ComponentFixture<RecivedDiscountRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecivedDiscountRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecivedDiscountRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
