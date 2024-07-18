
import { Routes } from '@angular/router';
/**
 * Components
 */
import { FamilyListComponent } from './pages/family-list/family-list.component';
import { FamilyComponent } from './family.component';
import { FamilyDetailsComponent } from './pages/details/family-details.component';
import { FamilyItemResolver, FamilyItemsResolver } from './family.resolvers';
import { CanDeactivateFamilyDetails } from './family.guards';

export default [
    {
        path: '',
        component: FamilyComponent,
        children: [
            {
                path: '',
                component: FamilyListComponent,
                // resolve: {
                //     items: FamilyItemsResolver
                // },
                children: [
                    {
                        path: ':id',
                        component: FamilyDetailsComponent,
                        // resolve: {
                        //     item: FamilyItemResolver
                        // },
                        canDeactivate: [CanDeactivateFamilyDetails]
                    }
                ]
            }
        ]
    }
] as Routes;
