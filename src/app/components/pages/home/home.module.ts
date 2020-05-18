import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomeComponent } from './home.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { CriteriaFieldComponent } from './category-panel/criteria-field/criteria-field.component';
import { ResultPanelComponent } from './result-panel/result-panel.component';
import { TrackerComponent } from './tracker/tracker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatCheckboxModule,
        FormsModule
    ],
    declarations: [
        HomeComponent,
        CategoryPanelComponent,
        CriteriaFieldComponent,
        ResultPanelComponent,
        TrackerComponent
    ],
})
export class HomeModule { }
