import { Component, Input } from '@angular/core';
import { Project } from './project';

@Component({
    selector: 'project',
    templateUrl: 'project.html',
    styleUrls: ['project.scss']
})
export class ProjectComponent {

    @Input() public project: Project;

}
