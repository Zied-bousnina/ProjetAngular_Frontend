import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenreService } from '../../../../services/genre.service';
import { Genre } from '../../../../classes/genre';
import { Film } from '../../../../classes/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent {



  registerForm!:FormGroup;
  submitted =false
  genre?:Genre[];
  genreFiltrer?:Genre;
  film?: Film[];
  filmSelected?:Film;
  duree?: Number;
  nomFilm?: String;
  gr?: Number;
  // newEquipe = new Equipe();
  constructor(private formBuilder: FormBuilder, private router : ActivatedRoute, private route:Router, private genreService: GenreService, private filmService:FilmService) { }


  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['', Validators.required],
      duree:['', Validators.required],
      genre:['', Validators.required],


    })
    this.genreService.ListGenres().subscribe(data=>{
      this.genre = data._embedded.genres;
    })
    this.filmService.getFilmList().subscribe((data:any)=> {
      this.film = data;
    })
    this.filmSelected = this.film?.find(e=>e.idFilm ==this.router.snapshot.params['id_film'])
    this.duree = this.filmSelected?.duree;
    this.nomFilm = this.filmSelected?.nomFilm;
  }

  onSubmit() {
    this.submitted=true;
    if(this.registerForm.invalid){
      // alert("Verifier Input")
      return
    }else{
      console.log(this.router.snapshot.params['id_film'])
      this.genreFiltrer = this.genre?.find(e=>e.id == this.registerForm.value.genre)
      this.filmSelected = this.film?.find(e=>e.idFilm ==this.router.snapshot.params['id_film'])

      console.log(this.filmSelected)

    }


  }
}
