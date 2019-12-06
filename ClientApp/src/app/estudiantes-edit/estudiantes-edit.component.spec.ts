import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesEditComponent } from './estudiantes-edit.component';

describe('EstudiantesEditComponent', () => {
  let component: EstudiantesEditComponent;
  let fixture: ComponentFixture<EstudiantesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
