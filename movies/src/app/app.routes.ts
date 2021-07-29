import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)}
];
