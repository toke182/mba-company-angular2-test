import {Component} from '@angular/core';
import {MoviesDetailComponent} from './movies/movies-detail.component';
import {CreateMovieFormComponent} from "./movies/create-movie-form.component";

@Component({
  selector: 'mbcompany-app',
  template: `
    <div class="container">
        <div class="row">
            <div class="col-sm-5" style="background-color:#f5f5f5">
                <create-movie-form></create-movie-form>
            </div>
            <div class="col-sm-7">
                <movies-detail></movies-detail>
            </div>
        </div>
    </div>
  `,
  directives: [
    MoviesDetailComponent,
    CreateMovieFormComponent
  ]
})

export class AppComponent {
}
