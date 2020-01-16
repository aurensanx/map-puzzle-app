import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MapPageRoutingModule} from './map-routing.module';

import {MapPage} from './map.page';
import {MapLeftBarComponent} from './map-left-bar/map-left-bar.component';
import {MapRightBarComponent} from './map-right-bar/map-right-bar.component';
import {MomentModule} from 'ngx-moment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MapPageRoutingModule,
        HttpClientModule,
        MomentModule.forRoot({
            relativeTimeThresholdOptions: {
                m: 59
            }
        })
    ],
    declarations: [MapPage, MapLeftBarComponent, MapRightBarComponent]
})
export class MapPageModule {
}
