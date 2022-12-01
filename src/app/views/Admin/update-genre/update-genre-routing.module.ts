import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateGenreComponent } from './update-genre/update-genre.component';

const routes: Routes = [
  {path: "", component: UpdateGenreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateGenreRoutingModule { }
