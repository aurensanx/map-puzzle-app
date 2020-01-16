import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MapScore} from '../map.service';
import {Subscription, timer} from 'rxjs';
import moment from 'moment';

@Component({
    selector: 'app-map-right-bar',
    templateUrl: './map-right-bar.component.html',
    styleUrls: ['./map-right-bar.component.scss'],
})
export class MapRightBarComponent implements OnInit, OnChanges, OnDestroy {

    @Input() score: MapScore;

    timerSubscription: Subscription;
    timerSeconds: string;

    wrongGuessesMapping: { [k: string]: string } = {'=0': '0 fallos', '=1': '1 fallo', other: '# fallos'};

    constructor() {
    }

    ngOnInit() {
        const source = timer(0, 1000);
        this.timerSubscription = source.subscribe(s => this.timerSeconds = moment().startOf('day').add(s, 'seconds').format('mm:ss'));
    }

    ngOnChanges({score}: SimpleChanges) {
        if (score && !score.isFirstChange()) {
            if (score.currentValue.finished) {
                this.timerSubscription.unsubscribe();
            }
        }
    }

    ngOnDestroy() {
        this.timerSubscription.unsubscribe();
    }
}
