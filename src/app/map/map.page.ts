import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MapService} from './map.service';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';

// import * as Hammer from 'hammerjs';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MapPage implements OnInit, OnDestroy {

    map: any;
    subscription: Subscription;

    constructor(private route: ActivatedRoute, public mapService: MapService, private httpClient: HttpClient) {
    }

    ngOnInit() {

        this.subscription = this.route.paramMap.subscribe(({params}: any) => {
            this.mapService.currentArea = undefined;
            this.httpClient.get(`./assets/maps/${params.id}.json`).subscribe((data: any) => {
                
                this.mapService.draw('#rootSVG', data);

                this.mapService.score = {
                    rightGuesses: 0,
                    wrongGuesses: 0,
                    totalAreas: data.length,
                    finished: false,
                };
            });

        });

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
