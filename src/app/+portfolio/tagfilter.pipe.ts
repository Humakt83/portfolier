import { Pipe } from '@angular/core'
import { Project } from './project';

@Pipe({
    name: 'tagfilter'
})
export class TagFilterPipe {

    transform(projects: Project[], tag: string): Project[] {
        return projects.filter((project: Project) => !tag || project.tags.indexOf(tag) >= 0);
    }

}
