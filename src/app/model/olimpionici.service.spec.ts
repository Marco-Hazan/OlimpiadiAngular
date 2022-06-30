import { TestBed } from '@angular/core/testing';

import { OlimpioniciService } from './olimpionici.service';

describe('OlimpioniciService', () => {
  let service: OlimpioniciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlimpioniciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
