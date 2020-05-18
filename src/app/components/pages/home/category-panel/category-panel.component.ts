import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AbstractPanelComponent } from '../abstract-panel/abstract-panel.component';

@Component({
    selector: 'app-category-panel-component',
    templateUrl: './category-panel.component.html',
    styleUrls: ['./category-panel.component.scss']
})
export class CategoryPanelComponent extends AbstractPanelComponent {
    @Input() category: Category;
}
