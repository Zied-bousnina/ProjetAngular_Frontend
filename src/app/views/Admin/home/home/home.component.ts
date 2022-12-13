import { Console } from './../../../../../../node_modules/codelyzer/node_modules/@angular/compiler/src/util.d';
import { Component, OnInit } from '@angular/core';

import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../../../classes/film';
import { Genre } from '../../../../classes/genre';
import { GenreService } from '../../../../services/genre.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomGenre!:String;
  genre?: Genre[] ;
  constructor(private genreService: GenreService){}


  // dtOptions: DataTables.Settings = {};


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.genreService.ListGenres().subscribe((data)=>{
      this.genre = data._embedded.genres;

      console.log(this.genre)
    })


    console.log("hello")
    // console.log(this.film?.valueOf())
  }
  delete(id:any, i:any) {
    const ok = confirm(`Delete Genre film :${id}`);
    if (ok) {
      this.genreService.deleteGenre(id).subscribe(data=>{
        this.genre?.splice(i,1)

      })

    }

  }

  rechercherGenres() {
    this.genreService.rechercheParNom(this.nomGenre).subscribe((data)=>{
      this.genre = data._embedded.genres;

      console.log(this.genre)
    })

    console.log(this.nomGenre)
  }





}
