import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: "full"
},
{
    path: 'dashboard',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
}
];
