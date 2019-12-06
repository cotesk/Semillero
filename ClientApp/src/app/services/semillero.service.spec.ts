import { TestBed, inject } from '@angular/core/testing';

import { SemilleroService } from './semillero.service';

describe('SemilleroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemilleroService]
    });
  });

  it('should be created', inject([SemilleroService], (service: SemilleroService) => {
    expect(service).toBeTruthy();
  }));
});
