import { MembersComponent } from './members.component';
import { MemberListComponent } from './pages/member-list/member-list.component';
import { MemberDetailsComponent } from './pages/member-details/member-details.component';
import { Routes } from '@angular/router';
import { CreateMemberComponent } from 'app/shared/components/create-member/create-member.component';

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
                path: 'create',
                component: CreateMemberComponent,
            },
            {
                path: ':id',
                component: MemberDetailsComponent
            }
        ]
    }
] as Routes;