import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFeedDisplayComponent } from './products-feed-display.component';

describe('ProductsFeedDisplayComponent', () => {
  let component: ProductsFeedDisplayComponent;
  let fixture: ComponentFixture<ProductsFeedDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsFeedDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsFeedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
