import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './cv.routes';
import { CVService } from './cv.service';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import 'rxjs/Rx';

@NgModule({
    declarations: [
        EducationComponent,
        ExperienceComponent,
        SkillsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [CVService]
})
export class CVModule {
    public static routes = routes;
}
