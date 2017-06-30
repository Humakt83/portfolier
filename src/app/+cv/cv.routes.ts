import { CVComponent } from './cv.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

export const routes = [
    { path: '', children: [
        { path: 'education', component: EducationComponent },
        { path: 'skills', component: SkillsComponent },
        { path: 'experience', component: ExperienceComponent }
    ]}
];
