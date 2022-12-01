import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFilmComponent } from './update-film/update-film.component';

const routes: Routes = [
  {path: "", component: UpdateFilmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateFilmRoutingModule { }
