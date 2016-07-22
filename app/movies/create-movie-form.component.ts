import {Component, Input, OnInit, Output} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";
// import {MoviesService} from "./movies.service";

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
    templateUrl: "app/movies/create-movie-form.component.html"

})
export class CreateMovieFormComponent implements OnInit {
    @Input() movieCategoryListing;
    @Output() addNewMovie = new EventEmitter();

    private categories : String[];
    private selectedCategory: String;
    private actors : Object[];
    private movieForm : Object = {};

    ngOnInit() {
        this.categories = Object.keys(this.movieCategoryListing);
        this.selectedCategory = "action";
        this.actors = [{name: null, salary: null}];
    }

    addNewEmptyActorRow() {
        this.actors.push({name: null, salary: null});
    }

    removeActorRow( i ) {
        if(this.actors.length > 1) {
            this.actors.splice(i, 1);
        }
    }

    onSubmit() {
        console.log(this.movieForm);
        this.addNewMovie.emit({
            name: 'Star Wars The Force Awakens',
            genre: 'Sci-fi',
            totalActorsPrice: 30000000,
            actors: [
                {name: 'Harrison ford', netWorth: 20000000},
                {name: 'Mark Hamil', netWorth: 7000000},
                {name: 'Carrier Fisher', netWorth: 3000000}
            ]
        });
    }
}
