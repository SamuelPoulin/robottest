import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import * as data from 'src/assets/data.json';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { Category } from 'src/app/models/category';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    categories: Category[];

    @ViewChildren(CategoryPanelComponent) categoryPanels: QueryList<CategoryPanelComponent>;

    constructor() {
        this.categories = data.categories;
    }

    get sum(): number {
        let sum = 0;

        if (this.categoryPanels) {
            this.categoryPanels.forEach((categoryPanel) => {
                sum += categoryPanel.sum;
            });
        }

        return sum;
    }
}
