import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditConseilsComponent } from './audit-conseils.component';

describe('AuditConseilsComponent', () => {
  let component: AuditConseilsComponent;
  let fixture: ComponentFixture<AuditConseilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditConseilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditConseilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
