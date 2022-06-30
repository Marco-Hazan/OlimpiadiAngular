import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OlimpioniciService } from 'src/app/model/olimpionici.service';
import { Selezionatore } from 'src/app/model/Selezionatore';
import { SelezionatoreRepositoryService } from 'src/app/model/selezionatore-repository.service';
import { Selezione } from 'src/app/model/Selezione';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {

  public selezionato:boolean = false;
 
  public selezionatore: Selezionatore = {
    "nome" : "",
    "cognome" : "",
    "citta" : "",
    "indirizzo" : ""
  };


  constructor(private selezionatore_repo: SelezionatoreRepositoryService, private olimpionici: OlimpioniciService) {
    this.selezione.setSelezionatore(this.selezionatore);
   }

  public selezione:Selezione = new Selezione( this.olimpionici );

  ngOnInit(): void {
  }

  inviaOlimpionico(formOlimpionico: NgForm){
    if(formOlimpionico.valid){
      this.selezionatore_repo.save(this.selezione);
    }
  }

}
