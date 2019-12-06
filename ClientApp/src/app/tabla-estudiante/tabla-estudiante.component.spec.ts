import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEstudianteComponent } from './tabla-estudiante.component';

describe('TablaEstudianteComponent', () => {
  let component: TablaEstudianteComponent;
  let fixture: ComponentFixture<TablaEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
