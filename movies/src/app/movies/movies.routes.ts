import { Routes } from '@angular/router';
import { LazyComponent } from './lazy/lazy.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';

export const MOVIES_ROUTES: Routes = [
    {
      path: '',
      component: MoviesSearchComponent
    },
    {
      path: 'test-second-route',
      component: LazyComponent
    }
];
