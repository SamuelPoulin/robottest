import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule
    ],
    declarations: [
        FooterComponent
    ],
    exports: [
        FooterComponent
    ]
})
export class SharedModule { }
