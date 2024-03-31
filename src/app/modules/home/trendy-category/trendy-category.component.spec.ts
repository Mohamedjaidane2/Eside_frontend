import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyCategoryComponent } from './trendy-category.component';

describe('TrendyCategoryComponent', () => {
  let component: TrendyCategoryComponent;
  let fixture: ComponentFixture<TrendyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendyCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
