import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderSectionComponent } from './gender-section.component';

describe('GenderSectionComponent', () => {
  let component: GenderSectionComponent;
  let fixture: ComponentFixture<GenderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
