
import { Routes } from '@angular/router';
/**
 * Components
 */
import { FamilyListComponent } from './pages/family-list/family-list.component';
import { FamilyComponent } from './family.component';
// import { FamilyDetailsComponent } from './pages/details/family-details.component';

export default [
    {
        path: '',
        component: FamilyComponent,
        children: [
            {
                path: 'list',
                component: FamilyListComponent,
            },
            // {
            //     path: ':id',
            //     component: FamilyDetailsComponent
            // }
        ]
    }
] as Routes;
