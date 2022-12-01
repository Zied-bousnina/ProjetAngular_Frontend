import { Component } from '@angular/core';
import { FilmService } from '../../../../services/film.service';
import { GenreService } from '../../../../services/genre.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../../../classes/film';
import { Genre } from '../../../../classes/genre';

@Component({
  selector: 'app-view-film',
  templateUrl: './view-film.component.html',
  styleUrls: ['./view-film.component.css']
})
export class ViewFilmComponent {

  films?: Film[];
  genre?: Genre;

  constructor(private filmService: FilmService, private genreService : GenreService, private Router: ActivatedRoute) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.Router.snapshot.params['id_genre'])
    this.genreService.getGenreById(this.Router.snapshot.params['id_genre']).subscribe(data=> {
      this.genre = data;

      console.log(this.genre)
      this.filmService.getFilmByGenre(data).subscribe((data2:any)=>{
        this.films = data2
        console.log(data2)
      })
    })
    console.log(this.genre)

  }

  delete(id:any, i:any) {
    const ok = confirm(`Delete  film :${id}`);
    if (ok) {
      this.filmService.deleteFilm(id).subscribe((data:any)=>{
        this.films?.splice(i,1)

      })

    }


  }



}
