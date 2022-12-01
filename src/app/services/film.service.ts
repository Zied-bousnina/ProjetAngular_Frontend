// import { Action } from './../../../node_modules/codelyzer/node_modules/rxjs/src/internal/scheduler/Action';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Film } from '../classes/film';
import {Observable} from 'rxjs'
import { Genre } from '../classes/genre';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private baseUrl = 'http://localhost:8080/film/api/film'

  constructor(private http:HttpClient) {  }

  getFilmList():Observable<Film>{
    return this.http.get(this.baseUrl);
  }


  getFilmByGenre(body:Genre):Observable<Object> {
    // http://localhost:8080/film/api/film/genre

    return this.http.get(`${this.baseUrl}/${body.id}/${body.nomGenre}` )
  }

  deleteFilm(id:any):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  updateFilm( body:Object):Observable<Object> {
    return this.http.put(`${this.baseUrl}`, {...body});

  }
  addFilm(body:Film){
    return this.http.post(this.baseUrl, body);

  }


}
