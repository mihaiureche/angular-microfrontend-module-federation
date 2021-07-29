import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import {OrderListModule} from 'primeng/orderlist';

import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { RouterModule } from '@angular/router';
import { MOVIES_ROUTES } from './movies.routes';
import { MoviesService } from './services/movies.service';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(MOVIES_ROUTES),
    ButtonModule,
    CardModule,
    InputTextModule,
    DataViewModule,
    OrderListModule
  ],
  declarations: [
    MoviesSearchComponent,
    MovieCardComponent
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
