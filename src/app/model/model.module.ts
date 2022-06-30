import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryService } from './repository.service';
import { AtletaRepositoryService } from './atleta-repository.service';
import { OlimpioniciService } from './olimpionici.service';
import { SelezionatoreRepositoryService } from './selezionatore-repository.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[RepositoryService,AtletaRepositoryService, OlimpioniciService, SelezionatoreRepositoryService]
})
export class ModelModule { }
