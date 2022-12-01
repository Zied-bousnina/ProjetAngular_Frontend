import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddGenreRoutingModule } from './add-genre-routing.module';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddGenreComponent
  ],
  imports: [
    CommonModule,
    AddGenreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddGenreModule { }
