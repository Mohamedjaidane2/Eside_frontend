import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFeedbackFieldComponent } from './send-feedback-field.component';

describe('SendFeedbackFieldComponent', () => {
  let component: SendFeedbackFieldComponent;
  let fixture: ComponentFixture<SendFeedbackFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendFeedbackFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendFeedbackFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
