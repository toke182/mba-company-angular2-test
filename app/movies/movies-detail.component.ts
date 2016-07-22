import {Component, Input} from "@angular/core";
import {MovieCardComponent} from "./movie-card.component";

@Component({
    selector: 'movies-detail',
    template: `
        <h2>Movies</h2>
        <div class="row">
            <div class="col-xs-4 pull-right">
                <select [(ngModel)]="sorting" (change)="sortMovies()" class="form-control">
                    <option value="priceHighToLow">Total cost (high to low)</option>
                    <option value="priceLowToHigh">Total cost (low to high)</option>
                </select>
            </div>
        </div>
        <ul class="movie-card-list list-unstyled">
            <li *ngFor="let movie of movieListing">
                <movie-card (cardsChange)="sortMovies()" [movie]="movie"></movie-card>
            </li>
        </ul>
    `,
    directives: [MovieCardComponent],
    styles: [`
        .movie-card-list {
            margin: 20px 0 20px;
        }
    `]

})
export class MoviesDetailComponent {
    @Input() movieListing;
    private sorting = "priceHighToLow";

    sortMovies(sortingMethod) {
        this.sorting = sortingMethod || this.sorting;

        switch (this.sorting) {
            case 'priceHighToLow':
                this.movieListing.sort(function(a, b){
                    let keyA = a['totalActorsPrice'];
                    let keyB = b['totalActorsPrice'];

                    if(keyA < keyB) return -1;
                    if(keyA > keyB) return 1;
                    return 0;
                });
                break;
            case 'priceLowToHigh':
                this.movieListing.sort(function(a, b){
                    let keyA = a['totalActorsPrice'];
                    let keyB = b['totalActorsPrice'];

                    if(keyA > keyB) return -1;
                    if(keyA < keyB) return 1;
                    return 0;
                });
                break;
        }
    }
}
