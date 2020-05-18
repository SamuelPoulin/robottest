import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AbstractPanelComponent } from '../abstract-panel/abstract-panel.component';
import { Level } from 'src/app/models/level';

@Component({
    selector: 'app-result-panel-component',
    templateUrl: './result-panel.component.html',
    styleUrls: ['./result-panel.component.scss']
})
export class ResultPanelComponent extends AbstractPanelComponent {
    @Input() sum: number;
    @Input() levels: Level[];

    get level(): Level {
        return this.levels.find(level => level.minPoints <= this.sum && level.maxPoints >= this.sum);
    }

    get picture(): string {
        return 'assets/' + this.level.picture;
    }
}
