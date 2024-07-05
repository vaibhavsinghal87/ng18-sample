import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        pathMatch: 'full',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'customers',
        pathMatch: 'full',
        loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
    }
];
