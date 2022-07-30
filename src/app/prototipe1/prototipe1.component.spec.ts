import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prototipe1Component } from './prototipe1.component';

describe('Prototipe1Component', () => {
  let component: Prototipe1Component;
  let fixture: ComponentFixture<Prototipe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prototipe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prototipe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
