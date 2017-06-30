import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PortfolioService } from './+portfolio/portfolio.service';
import { CVService } from './+cv/cv.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['app.scss'],
    templateUrl: 'app.html'
})
export class AppComponent implements OnInit {

    public portfolioExists: boolean = false;

    public skillsExists: boolean = false;
    public experienceExists: boolean = false;
    public educationExists: boolean = false;

    constructor(private portfolioService: PortfolioService, private cvService: CVService) {}

    public ngOnInit() {
        this.mapExistsToFlag(this.portfolioService.portfolioExists(), (result) => this.portfolioExists = result);
        this.mapExistsToFlag(this.cvService.educationExists(), (result) => this.educationExists = result);
        this.mapExistsToFlag(this.cvService.experienceExists(), (result) => this.experienceExists = result);
        this.mapExistsToFlag(this.cvService.skillsExists(), (result) => this.skillsExists = result);
    }

    private mapExistsToFlag(observable: Observable<boolean>, setFlag: (result: boolean) => any) {
        observable.first().subscribe((result: boolean) => setFlag(result));
    }

}
