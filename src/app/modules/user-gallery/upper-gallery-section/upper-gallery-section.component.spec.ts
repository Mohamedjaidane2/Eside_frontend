import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperGallerySectionComponent } from './upper-gallery-section.component';

describe('UpperGallerySectionComponent', () => {
  let component: UpperGallerySectionComponent;
  let fixture: ComponentFixture<UpperGallerySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperGallerySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperGallerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
