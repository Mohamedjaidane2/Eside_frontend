import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCardHomeComponent } from './sell-card-home.component';

describe('SellCardHomeComponent', () => {
  let component: SellCardHomeComponent;
  let fixture: ComponentFixture<SellCardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellCardHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellCardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
