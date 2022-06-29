import { Injectable } from '@angular/core';
import { Atleta } from './Atleta';
import { RepositoryService } from './repository.service';

@Injectable()
export class AtletaRepositoryService {

  constructor(private repo:RepositoryService) { }

  getAllAtleti(disciplina:string):Atleta[]{
    if(disciplina != ""){
      return this.repo.getAtleti().filter(atleta => atleta.categoria == disciplina);
    }
    return this.repo.getAtleti();
  }

  getCategorie():string[]{
    return this.repo.getAtleti()
                .map(atleta => atleta.categoria)
                .filter((value,index,atleti) => atleti.indexOf(value) == index);
  }

  getNazioni():string[]{
    return this.repo.getAtleti()
                .map(atleta => atleta.nazione)
                .filter((value,index,atleti) => atleti.indexOf(value) == index);
  }

}
