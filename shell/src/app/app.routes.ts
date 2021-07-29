import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    {
      path: 'movies',
      loadChildren: () =>
              loadRemoteModule({
                  remoteName: 'movies',
                  exposedModule: './Movies'
              })
              .then(m => m.MoviesModule)
    },
    { path: '**', component: NotFoundComponent }
];