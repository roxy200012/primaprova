import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrenotazioenComponent } from './prenotazioen/prenotazioen.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'prenotazione',component:PrenotazioenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
