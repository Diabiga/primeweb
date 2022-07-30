import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseAssistanceComponent } from './expertise-assistance.component';

describe('ExpertiseAssistanceComponent', () => {
  let component: ExpertiseAssistanceComponent;
  let fixture: ComponentFixture<ExpertiseAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiseAssistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
