import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSectionComponent } from './color-section.component';

describe('ColorSectionComponent', () => {
  let component: ColorSectionComponent;
  let fixture: ComponentFixture<ColorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
