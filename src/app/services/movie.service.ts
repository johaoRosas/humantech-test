import { Injectable } from '@angular/core';
import { movie } from '../model/movie';
import { movies } from './mock-movies';

@Injectable()
export class movieService {

  idGen: number = movies.length;

  constructor() {}

  getmovies(): movie[] {
    return movies;
  }

  getmovie(id: number): movie {
    const index = this._findIndexById(id);
    return movies[index];
  }

  storeMovie(newmovie: any) {
    this.idGen++;

    movies.push({
      id: this.idGen,
      title: newmovie.title, 
      body: newmovie.body,
      status: newmovie.status,
      created: new Date(newmovie.created)
    });
  }

  updateMovie(id: number, newmovie: any) {
    let mov = movies[this._findIndexById(id)];
    mov.title = newmovie.title; 
    mov.body = newmovie.body;
	mov.status = newmovie.status;
	mov.created = new Date(newmovie.created);
  }

  deleteMovie(obj: movie) {
    const index = movies.indexOf(obj);
    movies.splice(index , 1);
  }

  private _findIndexById(id: number): number {
    return movies.findIndex(function (element) {
      return element.id === id;
    });
  }

}
