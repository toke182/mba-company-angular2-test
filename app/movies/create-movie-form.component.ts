import {Component} from "@angular/core";
import {MoviesService} from "./movies.service";

@Component({
    selector: 'create-movie-form',
    styles: [`
        .create-movie {
            padding: 100px 0 50px 0;
        }
        .ng-touched.ng-invalid {
            border: 1px solid red; 
        }
        
        .well.well-dark {
            background-color: #ccc;
        }
    `],
    templateUrl: "app/movies/create-movie-form.component.html",
    providers: [
        MoviesService
    ],

})
export class CreateMovieFormComponent {
    private movieCategoryListing : Object = this.moviesService.getMovieCategoriesList();
    private categories : String[] = Object.keys(this.movieCategoryListing);
    private selectedCategory: String = "action";
    private actors : Object[] = [{name: null, salary: null}];

    constructor(private moviesService:MoviesService) {
    }

    addNewEmptyActorRow() {
        this.actors.push({name: null, salary: null});
    }

    removeActorRow( i ) {
        if(this.actors.length > 1) {
            this.actors.splice(i, 1);
        }
    }

    onSubmit($event, form) {
        console.log($event);
        console.log(form);
    }
}
