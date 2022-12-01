import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFilmRoutingModule } from './add-film-routing.module';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormControl, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddFilmComponent
  ],
  imports: [
    CommonModule,
    AddFilmRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddFilmModule { }
