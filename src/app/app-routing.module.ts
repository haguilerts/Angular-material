import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shader/home/home.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/'},
  {path:'', component: HomeComponent},
  /* {path:'perfil', component: MostraPerfilComponent}, */
  {path:'**', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
