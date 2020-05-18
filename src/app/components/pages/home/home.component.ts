import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import * as data from 'src/assets/data.json';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    categories: Category[];

    constructor() {
        this.categories = data.categories;
    }
}
