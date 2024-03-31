import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPortfeuilleComponent } from './mon-portfeuille.component';

describe('MonPortfeuilleComponent', () => {
  let component: MonPortfeuilleComponent;
  let fixture: ComponentFixture<MonPortfeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonPortfeuilleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonPortfeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
