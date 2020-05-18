import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Criteria } from 'src/app/models/criteria';

@Component({
    selector: 'app-criteria-field-component',
    templateUrl: './criteria-field.component.html',
    styleUrls: ['./criteria-field.component.scss']
})
export class CriteriaFieldComponent {
    @Input() criteria: Criteria;
    checked: boolean;

    constructor() {
        this.checked = false;
    }
}
