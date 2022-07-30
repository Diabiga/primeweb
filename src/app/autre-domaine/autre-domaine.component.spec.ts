import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreDomaineComponent } from './autre-domaine.component';

describe('AutreDomaineComponent', () => {
  let component: AutreDomaineComponent;
  let fixture: ComponentFixture<AutreDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutreDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutreDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
