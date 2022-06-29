import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryService } from './repository.service';
import { AtletaRepositoryService } from './atleta-repository.service';
import { OlimpioniciService } from './olimpionici-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[RepositoryService,AtletaRepositoryService, OlimpioniciService]
})
export class ModelModule { }
