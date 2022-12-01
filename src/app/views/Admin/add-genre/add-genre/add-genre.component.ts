import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreService } from '../../../../services/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent {



  registerForm!:FormGroup;
  submitted =false
  // newEquipe = new Equipe();
  constructor(private formBuilder: FormBuilder, private route:Router, private genreService: GenreService) { }


  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      nomGenre:['', Validators.required],


    //   lastName:['', Validators.required],
    //   adresse:['', Validators.required],
    //   tel:['', Validators.required]
    })
  }

  onSubmit() {

    this.submitted=true;
    if(this.registerForm.invalid){
      return
    }else{

    console.log(this.registerForm.value)
    this.genreService.addGenre(this.registerForm.value).subscribe(_=>{
      this.route.navigate(['/admin'])
    })


  }
  }

}
