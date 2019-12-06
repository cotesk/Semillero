import { TestBed, inject } from '@angular/core/testing';

import { SolicitudAvalService } from './solicitud-aval.service';

describe('SolicitudAvalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudAvalService]
    });
  });

  it('should be created', inject([SolicitudAvalService], (service: SolicitudAvalService) => {
    expect(service).toBeTruthy();
  }));
});
