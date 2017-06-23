import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { Home } from './home';

@Component({
    selector: 'home',
    styleUrls: ['home.css'],
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {

    public home: Home;

    constructor(private homeService: HomeService) {
    }

    public ngOnInit() {
        this.homeService.getHome().first().subscribe((result: Home) => {
            this.home = result;
            window.document.title = 'Portfolier - ' + this.home.name;
        });
    }

}
