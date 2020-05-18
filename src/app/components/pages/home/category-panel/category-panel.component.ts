import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AbstractPanelComponent } from '../abstract-panel/abstract-panel.component';

@Component({
    selector: 'app-category-panel-component',
    templateUrl: './category-panel.component.html',
    styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent extends AbstractPanelComponent {
    @Input() category: Category;
    @Output() messageEvent = new EventEmitter<number>();

    powerLevel = 0;

    sendPowerLevel() {
        this.messageEvent.emit(this.powerLevel);
    }

    onCheck(value: any, event: any): void {
        let isChecked: boolean;
        if (event.checked) {
            isChecked = true;
        }
        isChecked = !isChecked;
        if (isChecked) {
            this.powerLevel -= value.points;
        } else {
            this.powerLevel += value.points;
        }
        this.sendPowerLevel();
    }
}
