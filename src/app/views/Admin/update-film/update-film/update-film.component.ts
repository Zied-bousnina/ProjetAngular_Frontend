import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent {



  registerForm!:FormGroup;
  submitted =false
  // newEquipe = new Equipe();
  constructor(private formBuilder: FormBuilder, private route:Router) { }


  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['', Validators.required],
      type:['', Validators.required]

    //   lastName:['', Validators.required],
    //   adresse:['', Validators.required],
    //   tel:['', Validators.required]
    })
  }

}
