import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'example'},

    // Redirect signed-in user to the '/example'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes')},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes')},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes')},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes')},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes')}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes')},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes')}
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.routes')},
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
        //   {
        //                   path: 'dashboard',
        //                   loadChildren: () => import('app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
        //               },
                    //   {
                    //       path: 'calendar',
                    //       loadChildren: () => import('app/modules/calendar/calendar.module').then(m => m.CalendarModule)
                    //   },
                       {
                          path: 'posts',
                          loadChildren: () => import('app/modules/posts/posts.module').then(m => m.PostsModule)
                      },
                    //   {path: 'family', loadChildren: () => import('app/modules/family/family.module').then(m => m.FamilyModule)},
                      {
                          path: 'member',
                          loadChildren: () => import('app/modules/members/members.module').then(m => m.MembersModule)
                      },
                      {
                          path: 'about',
                          loadChildren: () => import('app/modules/common/about/about.module').then(m => m.AboutModule)
                      },
                    //   {
                    //       path: 'settings',
                    //       loadChildren: () => import('app/modules/settings/settings.module').then(m => m.SettingsModule)
                    //   },

                      // Coming soon
                    //   {
                    //       path: 'coming-soon',
                    //       loadChildren: () => import('app/layout/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)
                    //   },
        ]
    }
];
