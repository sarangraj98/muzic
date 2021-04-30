import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';

const routes: Routes = [
  {path:'recomendation',component:RecomendationsComponent},
  {path:'favourites',component:RecomendationsComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
