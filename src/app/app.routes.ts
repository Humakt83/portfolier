import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PortfolioComponent } from './+portfolio/portfolio.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cv', loadChildren: './+cv#CVModule' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
