import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewFilmRoutingModule } from './view-film-routing.module';
import { ViewFilmComponent } from './view-film/view-film.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    ViewFilmComponent
  ],
  imports: [
    CommonModule,
    ViewFilmRoutingModule,
    MatSlideToggleModule
  ]
})
export class ViewFilmModule { }
