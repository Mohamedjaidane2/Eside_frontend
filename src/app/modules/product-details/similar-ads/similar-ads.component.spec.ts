import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarAdsComponent } from './similar-ads.component';

describe('SimilarAdsComponent', () => {
  let component: SimilarAdsComponent;
  let fixture: ComponentFixture<SimilarAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarAdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
