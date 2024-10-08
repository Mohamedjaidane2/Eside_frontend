import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFavorisComponent } from './mes-favoris.component';

describe('MesFavorisComponent', () => {
  let component: MesFavorisComponent;
  let fixture: ComponentFixture<MesFavorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesFavorisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
