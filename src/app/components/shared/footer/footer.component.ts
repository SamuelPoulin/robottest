import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(private router: Router) { }

    navigate(link: string) {
        this.router.navigate([link]);
    }
}
