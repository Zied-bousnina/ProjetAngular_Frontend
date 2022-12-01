import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewFilmRoutingModule } from './view-film-routing.module';
import { ViewFilmComponent } from './view-film/view-film.component';


@NgModule({
  declarations: [
    ViewFilmComponent
  ],
  imports: [
    CommonModule,
    ViewFilmRoutingModule
  ]
})
export class ViewFilmModule { }
