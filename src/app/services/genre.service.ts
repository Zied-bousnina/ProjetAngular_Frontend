import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../classes/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private baseUrl = 'http://localhost:8080/film/api/genre'

  constructor(private http:HttpClient) {  }



  getGenreList():Observable<Genre[]>{
    return this.http.get<Genre[]>(this.baseUrl);
  }

  deleteGenre(id:any):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  updateGenre( body:Object):Observable<Object> {
    return this.http.put(`${this.baseUrl}`, {...body});

  }

  getGenreById(id:any):Observable<Genre>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  addGenre(nomGenre: any){
    return this.http.post(this.baseUrl, nomGenre )
  }
}
