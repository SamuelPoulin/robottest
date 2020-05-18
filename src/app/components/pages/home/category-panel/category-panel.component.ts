import { Component, Input, Output, EventEmitter, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AbstractPanelComponent } from '../abstract-panel/abstract-panel.component';
import { CriteriaFieldComponent } from './criteria-field/criteria-field.component';

@Component({
    selector: 'app-category-panel-component',
    templateUrl: './category-panel.component.html',
    styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent extends AbstractPanelComponent {
    @Input() category: Category;

    @ViewChildren(CriteriaFieldComponent) criteriaFields: QueryList<CriteriaFieldComponent>;

    get sum(): number {
        let sum = 0;

        if (this.criteriaFields) {
            this.criteriaFields.forEach((criteriaField) => {
                if (criteriaField.checked) {
                    sum += criteriaField.criteria.points;
                }
            });
        }

        return sum;
    }
}
