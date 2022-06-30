import { Injectable } from '@angular/core';
import { Atleta } from './Atleta';

@Injectable()
export class OlimpioniciService {

  private olimpionici: Atleta[] = [];

  constructor() { }

  aggiungi(atleta:Atleta){
    this.olimpionici.push(atleta);
  }

  rimuovi(atleta:Atleta){
    this.olimpionici.splice(this.olimpionici.indexOf(atleta),1);
  }

  getQuantita(){
    return this.olimpionici.length;
  }
}
