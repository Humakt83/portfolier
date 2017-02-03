import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
    declarations: [PortfolioComponent],
    imports: [BrowserModule, HttpModule, FormsModule, TranslateModule.forRoot()],
    bootstrap: [],
    providers: [HttpModule]
})
export class PortfolioModule {}
