import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteCardComponent } from './vente-card.component';

describe('VenteCardComponent', () => {
  let component: VenteCardComponent;
  let fixture: ComponentFixture<VenteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VenteCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
