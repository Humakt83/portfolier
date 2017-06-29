import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project';
import * as moment from 'moment';

@Pipe({
    name: 'tagfilter'
})
export class TagFilterPipe implements PipeTransform {

    public transform(projects: Project[], tag: string): Project[] {
        return projects.filter((project: Project) => !tag || project.tags.indexOf(tag) >= 0).sort((a: Project, b: Project) => this.compareByDate(a.created, b.created));
    }

    private compareByDate = (a: moment.Moment, b: moment.Moment): number {
        if (a === b || (!!a && !!b && a.isSame(b))) {
            return 0;
        }
        if (!!a && a.isAfter(b)) {
            return -1;
        }
        return 1;
    }

}
