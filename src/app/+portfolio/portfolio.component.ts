import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { PortfolioService } from './portfolio.service';

@Component({
    selector: 'portfolio',
    template: `
        <h1>Portfolio</h1>
        <project *ngFor="let project of projects" [project]="project"></project>
    `,
})
export class PortfolioComponent implements OnInit {

    public projects: Project[] = [];

    constructor(private portfolioService: PortfolioService) {}

    public ngOnInit() {
        this.portfolioService.getPortfolio().first().subscribe((result: Project[]) => this.projects = result);
    }

}
