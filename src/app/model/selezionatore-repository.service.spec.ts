import { TestBed } from '@angular/core/testing';

import { SelezionatoreRepositoryService } from './selezionatore-repository.service';

describe('SelezionatoreRepositoryService', () => {
  let service: SelezionatoreRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelezionatoreRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
