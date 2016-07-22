import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

    private moviesListMock : Object[] = [
        {
            name: 'Star Wars The Force Awakens',
            genre: 'Sci-fi',
            totalActorsPrice: 30000000,
            actors: [
                {name: 'Harrison ford', netWorth: 20000000},
                {name: 'Mark Hamil', netWorth: 7000000},
                {name: 'Carrier Fisher', netWorth: 3000000}
            ]
        },
        {
            name: 'Other Movie',
            genre: 'Sci-fi',
            totalActorsPrice: 20000000,
            actors: [
                {name: 'Actor 1', netWorth: 10000000},
                {name: 'Actor 2', netWorth: 7000000},
                {name: 'Actor 3', netWorth: 3000000}
            ]
        },
        {
            name: 'Star Wars The Force Awakens',
            genre: 'Action',
            totalActorsPrice: 15000000,
            actors: [
                {name: 'Actor 1', netWorth: 5000000},
                {name: 'Actor 2', netWorth: 7000000},
                {name: 'Actor 3', netWorth: 3000000}
            ]
        }
    ];

    private moviesCategoriesMock : Object = {
        "action": ["comedy", "crime", "thriller"],
        "animation": ["adventure", "comedy", "family"],
        "documentary": ["biography", "crime", "history"],
        "horror": ["comedy", "drama", "sci-fi"],
        "musical": ["comedy", "romance"],
        "war": ["action", "biography"],
        "adventure": ["biography", "war"],
        "drama": ["romance", "musical"],
        "sci-fi": ["action", "drama"],
        "mystery": ["adventure", "thriller"],
        "western": ["action", "comedy"],
        "thriller": ["action", "mystery"]
    };

    getMoviesList():Object[] {
        return this.moviesListMock;
    }

    getMovieCategoriesList():Object {
        return this.moviesCategoriesMock;
    }

    addMovie(movie) {
        this.moviesListMock.push(movie);
    }
}
