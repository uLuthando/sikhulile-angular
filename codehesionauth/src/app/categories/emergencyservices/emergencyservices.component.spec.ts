import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyservicesComponent } from './emergencyservices.component';

describe('EmergencyservicesComponent', () => {
  let component: EmergencyservicesComponent;
  let fixture: ComponentFixture<EmergencyservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
