import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierUneAnnonceComponent } from './publier-une-annonce.component';

describe('PublierUneAnnonceComponent', () => {
  let component: PublierUneAnnonceComponent;
  let fixture: ComponentFixture<PublierUneAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublierUneAnnonceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublierUneAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
