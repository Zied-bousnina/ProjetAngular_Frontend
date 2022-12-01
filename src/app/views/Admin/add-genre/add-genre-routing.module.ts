import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';

const routes: Routes = [
  {path: "", component: AddGenreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddGenreRoutingModule { }
