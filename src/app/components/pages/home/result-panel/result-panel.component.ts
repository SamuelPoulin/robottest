import { Component, Input } from '@angular/core';

import { AbstractPanelComponent } from '../abstract-panel/abstract-panel.component';

@Component({
    selector: 'app-result-panel-component',
    templateUrl: './result-panel.component.html',
    styleUrls: ['./result-panel.component.scss']
})
export class ResultPanelComponent extends AbstractPanelComponent {

}
