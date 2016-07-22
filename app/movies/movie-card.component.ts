import {Component, Input} from "@angular/core";

@Component({
    selector: 'movie-card',
    template: `
        <div class="well" itemscope itemtype="http://schema.org/Movie">
            <h4 class="row">
                <span class="col-xs-12" itemprop="name">{{movie.name}} ({{movie.genre}})</span>
            </h4>
            <ul class="list-unstyled">
                <li *ngFor="let actor of movie.actors"
                    class="row"
                    itemprop="actor"
                    itemscope itemtype="http://schema.org/Person">
                    <span class="col-xs-6" itemprop="name"> {{actor.name}}</span>
                    <span class="col-xs-6" itemprop="netWorth">{{ actor.netWorth | currency:'USD':false | slice:3 }} $</span>
                </li>
                <li class="row">
                    <span class="col-xs-6">TOTAL:</span>
                    <span class="col-xs-6">{{ movie.totalActorsPrice | currency:'USD':false | slice:3 }}$</span>
                </li>
            </ul>
        </div>
    `
})
export class MovieCardComponent {
    @Input() movie : Object[];

}

