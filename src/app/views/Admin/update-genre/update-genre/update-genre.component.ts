import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from '../../../../services/genre.service';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent {



  registerForm!:FormGroup;
  submitted =false
  // newEquipe = new Equipe();
  constructor(private formBuilder: FormBuilder, private route : Router, private router : ActivatedRoute,private genreService: GenreService ) { }


  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['', Validators.required]

    //   lastName:['', Validators.required],
    //   adresse:['', Validators.required],
    //   tel:['', Validators.required]
    })

  }
  onSubmit(){

    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }else{

    console.log(this.registerForm.value)
    console.log( {id:this.router.snapshot.params['id_genre'],nomGenre:this.registerForm.value.name})
    this.genreService.updateGenre({id:this.router.snapshot.params['id_genre'], nomGenre:this.registerForm.value.name}).subscribe(data=>{
      this.route.navigate(['/admin'])

    }
    )

  }
}
  }
