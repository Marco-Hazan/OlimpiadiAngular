import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Selezione } from './Selezione';

@Injectable()
export class SelezionatoreRepositoryService {

  constructor(private repo: RepositoryService) {}

  save(selezione:Selezione){
    this.repo.save(selezione);
  }
}
