import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { LuxonDateAdapter } from '@angular/material-luxon-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    PreloadAllModules,
    provideRouter,
    withInMemoryScrolling,
    withPreloading,
} from '@angular/router';
import { provideFuse } from '@fuse';
import { TranslocoService, provideTransloco } from '@ngneat/transloco';
import { appRoutes } from 'app/app.routes';
import { provideAuth } from 'app/core/auth/auth.provider';
import { provideIcons } from 'app/core/icons/icons.provider';
import { mockApiServices } from 'app/mock-api';
import { firstValueFrom } from 'rxjs';
import { TranslocoHttpLoader } from './core/transloco/transloco.http-loader';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const isLocal = window.location.origin.includes('localhost');
const config = {
    "domain": "https://socio01.eu.auth0.com/",
    "clientId": "aMVGJKhm1SmRruk1FRj8Q1DBUkPNooEr",
    "authorizationParams": {
        "audience": "https://socio01.eu.auth0.com/api/v2/",
        "redirect_uri": isLocal ? "/posts" : "https://socio-org.github.io/admin-dashboard"
    },
    "apiUri": "http://localhost:3001",
    "appUri": isLocal ? "http://localhost:4200" : "https://socio-org.github.io/admin-dashboard",
    "errorPath": "/error"
};

const { domain, clientId, authorizationParams: { audience }, apiUri, errorPath } = config as {
    domain: string;
    clientId: string;
    authorizationParams: {
        audience?: string;
    },
    apiUri: string;
    errorPath: string;
};

export const env = {
    production: false,
    auth: {
        domain,
        clientId,
        authorizationParams: {
            ...(audience && audience !== 'YOUR_API_IDENTIFIER' ? { audience } : null),
            redirect_uri: window.location.origin,
        },
        errorPath,
    },
    httpInterceptor: {
        allowedList: [`${apiUri}/*`],
    },
};

export const appConfig: ApplicationConfig = {
    providers: [

        provideAnimations(),
        provideHttpClient(withInterceptors([authHttpInterceptorFn])),
        provideAuth0({
            domain: 'socio01.eu.auth0.com',
            clientId: 'aMVGJKhm1SmRruk1FRj8Q1DBUkPNooEr',
            authorizationParams: {
                redirect_uri: isLocal ? window.location.origin + "/posts" : window.location.origin + "/admin-dashboard"
            }
        }),
        provideRouter(
            appRoutes,
            withPreloading(PreloadAllModules),
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
        ),
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        // Material Date Adapter
        {
            provide: DateAdapter,
            useClass: LuxonDateAdapter,
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'D',
                },
                display: {
                    dateInput: 'DDD',
                    monthYearLabel: 'LLL yyyy',
                    dateA11yLabel: 'DD',
                    monthYearA11yLabel: 'LLLL yyyy',
                },
            },
        },

        // Transloco Config
        provideTransloco({
            config: {
                availableLangs: [
                    {
                        id: 'en',
                        label: 'English',
                    },
                    {
                        id: 'tr',
                        label: 'Turkish',
                    },
                ],
                defaultLang: 'en',
                fallbackLang: 'en',
                reRenderOnLangChange: true,
                prodMode: true,
            },
            loader: TranslocoHttpLoader,
        }),
        {
            // Preload the default language before the app starts to prevent empty/jumping content
            provide: APP_INITIALIZER,
            useFactory: () => {
                const translocoService = inject(TranslocoService);
                const defaultLang = translocoService.getDefaultLang();
                translocoService.setActiveLang(defaultLang);

                return () => firstValueFrom(translocoService.load(defaultLang));
            },
            multi: true,
        },

        // Fuse
        provideAuth(),
        provideIcons(),
        provideFuse({
            mockApi: {
                delay: 0,
                services: mockApiServices,
            },
            fuse: {
                layout: 'classy',
                scheme: 'light',
                screens: {
                    sm: '600px',
                    md: '960px',
                    lg: '1280px',
                    xl: '1440px',
                },
                theme: 'theme-default',
                themes: [
                    {
                        id: 'theme-default',
                        name: 'Default',
                    },
                    {
                        id: 'theme-brand',
                        name: 'Brand',
                    },
                    {
                        id: 'theme-teal',
                        name: 'Teal',
                    },
                    {
                        id: 'theme-rose',
                        name: 'Rose',
                    },
                    {
                        id: 'theme-purple',
                        name: 'Purple',
                    },
                    {
                        id: 'theme-amber',
                        name: 'Amber',
                    },
                ],
            },
        }),
    ],
};
