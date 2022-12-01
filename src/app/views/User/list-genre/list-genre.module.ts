import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGenreRoutingModule } from './list-genre-routing.module';
import { ListGenreComponent } from './list-genre/list-genre.component';


@NgModule({
  declarations: [
    ListGenreComponent
  ],
  imports: [
    CommonModule,
    ListGenreRoutingModule
  ]
})
export class ListGenreModule { }
