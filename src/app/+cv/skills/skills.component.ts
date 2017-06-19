import { Component, OnInit } from '@angular/core';
import { SkillGroup } from './skillgroup';
import { CVService } from '../cv.service';
import { SkillLevel } from './skill';

@Component({
    selector: 'skills',
    templateUrl: './skills.html',
    styleUrls: ['skills.scss']
})
export class SkillsComponent implements OnInit {

    public skillGroups: SkillGroup[] = [];

    public skillLevel = SkillLevel;

    constructor(private cv: CVService) {}

    public ngOnInit() {
        this.cv.getSkills().first()
        .subscribe((result: SkillGroup[]) => this.skillGroups = result);
    }

}
