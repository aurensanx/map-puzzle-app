import {Injectable} from '@angular/core';
import {AreaModel} from './model';
import * as d3 from 'd3';
import * as _ from 'lodash';

export interface MapScore {
    rightGuesses: number;
    wrongGuesses: number;
    totalAreas: number;
    finished: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class MapService {

    pendingAreas: AreaModel[];
    guessedAreas: string[];
    currentArea: AreaModel;
    score: MapScore = {
        rightGuesses: 0,
        wrongGuesses: 0,
        totalAreas: undefined,
        finished: false,
    };

    constructor() {
    }

    draw = (id, dataPath: AreaModel[]) => {

        const g = d3.select(id).append('g');

        g.selectAll('.map-area')
            .data(dataPath).enter().append('path')
            .attr('class', 'map-area')
            .attr('d', d => d.d)
            .attr('id', d => d.id)
            .attr('pointer-events', 'fill')
            .on('click', this.onClick);

        d3.select(id)
            .attr('width', 1920)
            .attr('height', 1080)
            .call(d3.zoom()
                .scaleExtent([0.5, 8])
                .on('zoom', () => this.onZoom(g)));

        this.pendingAreas = dataPath;
        this.guessedAreas = [];
        this.getRandomArea();

    };

    onZoom(svg) {
        svg.attr('transform', d3.event.transform);
    }

    onClick = (d: AreaModel) => {
        const clickedArea = d3.select(`path#${d.id}`);
        if (_.indexOf(this.guessedAreas, d.id) === -1) {
            if (this.currentArea.id === d.id) {
                this.onRightGuess(clickedArea, d);
            } else {
                this.onWrongGuess(clickedArea);
            }
            this.getRandomArea();
        }
    };

    onRightGuess = (clickedArea: any, d: AreaModel) => {
        this.score.rightGuesses++;

        clickedArea.classed('correct', true);
        this.removeClickedArea(d);
    };

    onWrongGuess = (clickedArea: any) => {
        this.score.wrongGuesses++;

        // FIXME with css
        clickedArea.classed('wrong', true);
        setTimeout(() => {
            clickedArea.classed('wrong', false);
        }, 1000);
    };

    getRandomArea: () => void = () => {
        this.currentArea = this.pendingAreas[Math.floor(Math.random() * (this.pendingAreas.length))];
        if (!this.currentArea) {
            this.score = {...this.score, finished: true};
        }
    };

    removeClickedArea: (d: AreaModel) => void = d => {
        this.guessedAreas.push(_.remove(this.pendingAreas, ['id', d.id])[0].id);
    };
}
