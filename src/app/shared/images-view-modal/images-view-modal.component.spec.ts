import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesViewModalComponent } from './images-view-modal.component';

describe('ImagesViewModalComponent', () => {
  let component: ImagesViewModalComponent;
  let fixture: ComponentFixture<ImagesViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesViewModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagesViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
