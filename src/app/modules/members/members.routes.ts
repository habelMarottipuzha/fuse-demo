import { MembersComponent } from './members.component';
import { MemberListComponent } from './pages/member-list/member-list.component';
import { MemberDetailsComponent } from './pages/member-details/member-details.component';
import { Routes } from '@angular/router';

export default [
    {
        path: '',
        component: MembersComponent,
        children: [
            {
                path: 'list',
                component: MemberListComponent,
            },
            {
                path: ':id',
                component: MemberDetailsComponent
            }
        ]
    }
] as Routes;