import { Component, OnInit } from '@angular/core';
import { CVService } from '../cv.service';
import { Experience } from './experience';

@Component({
    templateUrl: './experience.html'
})
export class ExperienceComponent implements OnInit {

    public experience: Experience[] = [];

    constructor(private cv: CVService) { }

    public ngOnInit() {
        this.cv.getExperience()
            .first()
            .subscribe((result: Experience[]) => this.experience = result);
    }

}
