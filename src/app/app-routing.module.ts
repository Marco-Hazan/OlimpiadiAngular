import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RiepilogoComponent } from './core/riepilogo/riepilogo.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"dettaglio-atleta", component: RiepilogoComponent},
  {path: "**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
