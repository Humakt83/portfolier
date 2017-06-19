import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './cv.routes';
import { CVService } from './cv.service';
import { CVComponent } from './cv.component';
import { EducationComponent } from './education';
import { ExperienceComponent } from './experience';
import { SkillsComponent } from './skills';
import { MenuComponent } from './menu.component';
import 'rxjs/Rx';

@NgModule({
    declarations: [
        CVComponent,
        EducationComponent,
        ExperienceComponent,
        SkillsComponent,
        MenuComponent
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
