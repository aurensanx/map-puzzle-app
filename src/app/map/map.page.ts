import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MapService} from './map.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MapPage implements OnInit {

    map: any;

    constructor(private route: ActivatedRoute, public mapService: MapService, private httpClient: HttpClient) {
    }

    ngOnInit() {

        this.route.paramMap.subscribe(({params}: any) => {
            this.httpClient.get(`./assets/maps/${params.id}.json`).subscribe((data: any) => {
                this.mapService.draw('#rootSVG', data);
            });

        });

    }
}
