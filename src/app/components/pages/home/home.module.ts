import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomeComponent } from './home.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule
    ],
    declarations: [
        HomeComponent,
        CategoryPanelComponent,
        ResultPanelComponent
    ],
})
export class HomeModule { }
