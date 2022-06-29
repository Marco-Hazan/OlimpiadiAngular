import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryService } from './repository.service';
import { AtletaRepositoryService } from './atleta-repository.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[RepositoryService,AtletaRepositoryService]
})
export class ModelModule { }
