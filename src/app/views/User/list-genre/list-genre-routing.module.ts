import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGenreComponent } from './list-genre/list-genre.component';

const routes: Routes = [
  {path: "", component: ListGenreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGenreRoutingModule { }
