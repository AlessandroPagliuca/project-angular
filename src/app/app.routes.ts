import { Routes } from '@angular/router';
import { API_PATH } from './shared/enums/api-path';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: API_PATH.HOME
    },
    {
        path: API_PATH.HOME,
        loadComponent: () => import("./core/pages/home/home.component").then(c => c.HomeComponent)
    },
    {
        path: API_PATH.CONFERENCES,
        loadComponent: () => import("./core/pages/conferences/conferences.component").then(c => c.ConferencesComponent)
    },
    {
        path: API_PATH.CATCH_ALL,
        loadComponent: () => import("./core/pages/errors/error404/error404.component").then(c => c.Error404Component)
    }
];
