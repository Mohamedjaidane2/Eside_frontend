import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategorySectionComponent } from './subCategory-section.component';

describe('MarqueSectionComponent', () => {
  let component: SubCategorySectionComponent;
  let fixture: ComponentFixture<SubCategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCategorySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
