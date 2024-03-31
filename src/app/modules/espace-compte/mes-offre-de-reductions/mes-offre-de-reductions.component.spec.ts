import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesOffreDeReductionsComponent } from './mes-offre-de-reductions.component';

describe('MesOffreDeReductionsComponent', () => {
  let component: MesOffreDeReductionsComponent;
  let fixture: ComponentFixture<MesOffreDeReductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesOffreDeReductionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesOffreDeReductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
