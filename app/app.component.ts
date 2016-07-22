import {Component} from '@angular/core';
import {MoviesDetailComponent} from './movies/movies-detail.component';
import {CreateMovieFormComponent} from "./movies/create-movie-form.component";
import {MoviesService} from "./movies/movies.service";

@Component({
  selector: 'mbcompany-app',
  template: `
    <div class="container">
        <div class="row">
            <div class="col-sm-5" style="background-color:#f5f5f5">
                <create-movie-form [movieCategoryListing]="movieCategoryListing" [movieListing]="movieListing" (addNewMovie)="addNewMovie($event)"></create-movie-form>
            </div>
            <div class="col-sm-7">
                <movies-detail [movieListing]="movieListing"></movies-detail>
            </div>
        </div>
    </div>
  `,
  directives: [
    MoviesDetailComponent,
    CreateMovieFormComponent
  ],
  providers: [
      MoviesService
  ]
})

export class AppComponent {
  private movieCategoryListing = this.moviesService.getMovieCategoriesList();
  private movieListing : Object[] = this.moviesService.getMoviesList();

  constructor(private moviesService:MoviesService) {
  }

  addNewMovie(movie){
    this.moviesService.addMovie(movie);
  }
}
