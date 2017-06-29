import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';
import { ProjectComponent } from './project.component';
import { TagFilterPipe } from './tagfilter.pipe';
import 'rxjs/Rx';

@NgModule({
    declarations: [
        PortfolioComponent,
        ProjectComponent,
        TagFilterPipe
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    providers: [PortfolioService]
})
export class PortfolioModule {
}
