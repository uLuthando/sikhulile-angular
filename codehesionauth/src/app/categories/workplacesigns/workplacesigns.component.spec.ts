import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplacesignsComponent } from './workplacesigns.component';

describe('WorkplacesignsComponent', () => {
  let component: WorkplacesignsComponent;
  let fixture: ComponentFixture<WorkplacesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplacesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplacesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
