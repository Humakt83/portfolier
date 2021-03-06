import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { PortfolioService } from './portfolio.service';
import _ from 'lodash';

@Component({
    selector: 'portfolio',
    templateUrl: 'portfolio.html',
    styleUrls: ['common.scss']
})
export class PortfolioComponent implements OnInit {

    public projects: Project[] = [];
    public tags: string[] = [];
    public selectedTag: string = undefined;

    constructor(private portfolioService: PortfolioService) { }

    public ngOnInit() {
        this.portfolioService.getPortfolio().first()
            .subscribe(
            (result: Project[]) => {
                this.projects = result;
                this.tags = <string[]> _.chain(this.projects)
                .map((project: Project) => project.tags)
                .flatten()
                .uniq()
                .value();
            },
            error => console.error(error));
    }

    public filterByTag(tag: string) {
        this.selectedTag = this.selectedTag === tag ? undefined : tag;
    }

}
