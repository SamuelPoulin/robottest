import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import * as data from 'src/assets/data.json';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { Category } from 'src/app/models/category';
import { Level } from 'src/app/models/level';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    categories: Category[];
    levels: Level[];

    @ViewChildren(CategoryPanelComponent) categoryPanels: QueryList<CategoryPanelComponent>;

    constructor() {
        this.categories = data.categories;
        this.levels = data.levels;
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
