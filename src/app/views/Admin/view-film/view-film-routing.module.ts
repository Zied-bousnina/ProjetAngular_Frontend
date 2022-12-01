import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFilmComponent } from './view-film/view-film.component';

const routes: Routes = [
  {path:'', component: ViewFilmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFilmRoutingModule { }
