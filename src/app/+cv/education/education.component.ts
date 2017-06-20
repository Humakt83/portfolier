import { Component, OnInit } from '@angular/core';
import { CVService } from '../cv.service';
import { Education } from './education';

@Component({
    templateUrl: 'education.html',
    styleUrls: ['../common.scss']
})
export class EducationComponent implements OnInit {

    public education: Education[] = [];

    constructor(private cv: CVService) {}

    public ngOnInit() {
        this.cv.getEducation()
        .first()
        .subscribe((result: Education[]) => this.education = result);
    }

}
