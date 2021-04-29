import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendationsComponent } from './recomendations/recomendations.component';

const routes: Routes = [
  {path:'recomendation',component:RecomendationsComponent},
  {path:'favourites',component:RecomendationsComponent},
  {path:'saved',component:RecomendationsComponent},
  {path:'home',component:RecomendationsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
