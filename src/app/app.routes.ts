import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { PortfolioComponent } from './portfolio';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  // { path: 'cv', loadChildren: './+detail#DetailModule'},
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**',    component: NoContentComponent },
];
