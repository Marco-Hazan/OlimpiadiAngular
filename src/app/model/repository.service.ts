import { Injectable } from '@angular/core';
import { Atleta } from './Atleta';

@Injectable()
export class RepositoryService {

  constructor() { }

  private atleti: Atleta[] = [
    {
      "nome": "Federica Pellegrini",
      "categoria": "Nuoto",
      "nazione": "Italia",
      "descrizione": "bravissima nuotatrice"
    },
    {
      "nome": "Usain Bolt",
      "categoria": "Corsa",
      "nazione": "Jamaica",
      "descrizione": "Usain Bolt ha battuto il record dei 100 e 200 metri"
    },
    {
      "nome": "Iuri Chechi",
      "categoria": "Ginnastica",
      "nazione": "Italia",
      "descrizione": "Grande atleta"
    },
    {
      "nome": "Carl Lewis",
      "categoria": "Atletica",
      "nazione": "USA",
      "descrizione": "Molto forte"
    }
  ]

  

  getAtleti(): Atleta[]{
    return this.atleti;
  }
}
