import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueSectionComponent } from './marque-section.component';

describe('MarqueSectionComponent', () => {
  let component: MarqueSectionComponent;
  let fixture: ComponentFixture<MarqueSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarqueSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
