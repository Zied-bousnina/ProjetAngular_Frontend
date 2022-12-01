import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateGenreRoutingModule } from './update-genre-routing.module';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    UpdateGenreComponent
  ],
  imports: [
    CommonModule,
    UpdateGenreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UpdateGenreModule { }
