import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCompteComponent } from './espace-compte.component';

describe('EspaceCompteComponent', () => {
  let component: EspaceCompteComponent;
  let fixture: ComponentFixture<EspaceCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceCompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspaceCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
