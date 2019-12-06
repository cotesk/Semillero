import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalComponent } from './aval.component';

describe('AvalComponent', () => {
  let component: AvalComponent;
  let fixture: ComponentFixture<AvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
