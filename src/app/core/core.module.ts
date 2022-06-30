import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { HomeComponent } from './home/home.component';
import { RiepilogoComponent } from './riepilogo/riepilogo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    RiepilogoComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class CoreModule { }
