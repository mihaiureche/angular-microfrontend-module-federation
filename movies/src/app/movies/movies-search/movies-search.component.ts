import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse, MoviesService, Movie } from '../services/movies.service';
import { map } from 'rxjs/operators';

interface MovieModel {
  name: string;
  image: string;
}

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.components.scss']
})
export class MoviesSearchComponent {

  movie: string = '';

  movies$: Observable<MovieModel[]> = of([]);

  logoIcon = environment.path+'assets/angular.png';

  constructor(private moviesService: MoviesService) {}

  search(): void {
    this.movies$ = this.moviesService.getMovies<MovieResponse>(this.movie).pipe(
      map(({results}: MovieResponse) => results.map((movie: Movie) => ({
        name: movie.title,
        image: movie.poster_path ? movie.poster_path : 'wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
      })))
    )
  }
  
  triggerSearch(query: string) {
    if(query.length > 3) {
      this.search();
    }
  }

  async ngAfterViewInit()
  {
    const version = document.getElementById('version');
    const useless = await import('useless-lib');

    if(version) 
      version.innerText = useless.version;
  }


}
