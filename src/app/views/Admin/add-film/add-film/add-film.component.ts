import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Genre } from '../../../../classes/genre';
import { GenreService } from '../../../../services/genre.service';
import { FilmService } from '../../../../services/film.service';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent {


  registerForm!:FormGroup;
  submitted =false
  // newEquipe = new Equipe();
  constructor(private formBuilder: FormBuilder, private route:Router, private genreService: GenreService, private filmService: FilmService) { }

  genre?:Genre[];

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['', Validators.required],
      duree:['', Validators.required],
      genre:['', Validators.required],

    //   lastName:['', Validators.required],
    //   adresse:['', Validators.required],
    //   tel:['', Validators.required]
    })
    this.genreService.getGenreList().subscribe(data=>{
      this.genre = data;
    })
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }else{

    console.log(this.registerForm.value)
    console.log(this.genre)
    console.log(this.genre?.find(el=>el.id== this.registerForm.value.genre))
    this.filmService.addFilm({nomFilm:this.registerForm.value.name, duree:this.registerForm.value.duree, genre: {...this.genre?.find(el=>el.id== this.registerForm.value.genre)} }).subscribe(_=>{
      this.route.navigate(['/admin'])
    })


  }


  }

}
