import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateFilmRoutingModule } from './update-film-routing.module';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateFilmComponent
  ],
  imports: [
    CommonModule,
    UpdateFilmRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UpdateFilmModule { }
