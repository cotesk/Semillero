import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarsemilleroComponent } from './registrarsemillero.component';

describe('RegistrarsemilleroComponent', () => {
  let component: RegistrarsemilleroComponent;
  let fixture: ComponentFixture<RegistrarsemilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarsemilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarsemilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
