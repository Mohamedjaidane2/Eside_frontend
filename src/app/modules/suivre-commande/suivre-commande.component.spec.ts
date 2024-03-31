import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivreCommandeComponent } from './suivre-commande.component';

describe('SuivreCommandeComponent', () => {
  let component: SuivreCommandeComponent;
  let fixture: ComponentFixture<SuivreCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuivreCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuivreCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
