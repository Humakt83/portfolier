import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './cv.routes';
import { CVComponent } from './cv.component';
import { EducationComponent } from './education';
import { ExperienceComponent } from './experience';
import { SkillsComponent } from './skills';

@NgModule({
    declarations: [
        CVComponent,
        EducationComponent,
        ExperienceComponent,
        SkillsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class CVModule {
    public static routes = routes;
}
