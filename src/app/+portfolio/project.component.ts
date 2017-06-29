import { Component, Input } from '@angular/core';
import { Project } from './project';

@Component({
    selector: 'project',
    templateUrl: 'project.html',
    styleUrls: ['project.scss', 'common.scss']
})
export class ProjectComponent {

    @Input() public project: Project;

    public goToLink() {
        if (!!this.project.link) {
            window.open(this.project.link, 'blank', '', true);
        }
    }
}
