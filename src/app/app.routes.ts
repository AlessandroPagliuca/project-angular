import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadComponent: () => import("./core/pages/home/home.component").then(c => c.HomeComponent)
    },
    {
        path: 'events',
        loadComponent: () => import("./core/pages/events/events.component").then(c => c.EventsComponent)
    },
    {
        path: '**',
        loadComponent: () => import("./core/pages/errors/error404/error404.component").then(c => c.Error404Component)
    }
];
