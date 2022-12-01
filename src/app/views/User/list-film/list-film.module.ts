import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFilmRoutingModule } from './list-film-routing.module';
import { ListFilmComponent } from './list-film/list-film.component';


@NgModule({
  declarations: [
    ListFilmComponent
  ],
  imports: [
    CommonModule,
    ListFilmRoutingModule
  ]
})
export class ListFilmModule { }
