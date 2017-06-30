import { Component, Input } from '@angular/core';
import { Project } from './project';

@Component({
    selector: 'project',
    templateUrl: 'project.html',
    styleUrls: ['project.scss', 'common.scss']
})
export class ProjectComponent {

    @Input() public project: Project;

    public displayArrow: boolean = false;

    public currentImage: number = 0;

    public goToLink() {
        if (!!this.project.link) {
            window.open(this.project.link, 'blank', '', true);
        }
    }

    public nextImage(event: Event) {
        event.stopPropagation();
        this.currentImage++;
    }

    public previousImage(event: Event) {
        event.stopPropagation();
        this.currentImage--;
    }

}
