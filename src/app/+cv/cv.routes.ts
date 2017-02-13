import { CVComponent } from './cv.component';
import { EducationComponent } from './education';
import { ExperienceComponent } from './experience';
import { SkillsComponent } from './skills';

export const routes = [
    { path: '', component: CVComponent },
    { path: '', children: [
        { path: 'education', component: EducationComponent },
        { path: 'skills', component: SkillsComponent },
        { path: 'experience', component: ExperienceComponent }
    ]}
];
