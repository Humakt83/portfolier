import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { PortfolioService } from './portfolio.service';

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
                //TODO: use lodash
                this.projects.map((project: Project) => project.tags).forEach(tags => {
                    tags.forEach(tag => {
                        if (!this.tags.find(val => val === tag)) {
                            this.tags.push(tag);
                        }
                    })

                });

            });
    }

    public filterByTag(tag: string) {
        if (this.selectedTag === tag) {
            this.selectedTag = undefined;
        } else {
            this.selectedTag = tag;
        }
    }

}
