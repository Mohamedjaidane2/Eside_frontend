import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesInformationComponent } from './mes-information.component';

describe('MesInformationComponent', () => {
  let component: MesInformationComponent;
  let fixture: ComponentFixture<MesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
