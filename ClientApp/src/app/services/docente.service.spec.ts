import { TestBed, inject } from '@angular/core/testing';

import { DocenteService } from './docente.service';

describe('DocenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocenteService]
    });
  });

  it('should be created', inject([DocenteService], (service: DocenteService) => {
    expect(service).toBeTruthy();
  }));
});
