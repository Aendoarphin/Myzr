import { Routes } from '@angular/router';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Browse } from "./browse/browse";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'browse',
    component: Browse
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
