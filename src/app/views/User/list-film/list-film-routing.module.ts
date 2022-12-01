import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';

const routes: Routes = [
  {path:"", component: ListFilmComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFilmRoutingModule { }
