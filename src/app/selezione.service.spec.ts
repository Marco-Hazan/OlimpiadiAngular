import { TestBed } from '@angular/core/testing';

import { SelezioneService } from './selezione.service';

describe('SelezioneService', () => {
  let service: SelezioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelezioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
