import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  title: string;
  poster_path: string
}

export interface MovieResponse {
  results: Movie[],
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movieEndpoint: string = 'https://api.themoviedb.org/3';
  private movieApiKey: string = '';

  constructor(private http: HttpClient) { }

  getMovies<MovieResponse>(movie: string) {
    return this.http.get<MovieResponse>(`${this.movieEndpoint}/search/movie?query=${movie}&api_key=${this.movieApiKey}`)
  }
}
