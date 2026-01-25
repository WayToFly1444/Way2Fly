import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  {
    path: '',
    loadChildren: () =>
      import('./components/home-routes/home.routes').then(m => m.routes)
  },

  { path: '**', redirectTo: 'home' }
];
