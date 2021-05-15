/* eslint-disable */
import { Shortcut } from 'app/layout/common/shortcuts/shortcuts.types';

export const shortcuts: Shortcut[] = [
    {
        id         : 'a1ae91d3-e2cb-459b-9be9-a184694f548b',
        label      : 'Changelog',
        description: 'Latest version: v1.2',
        icon       : 'heroicons_outline:clipboard-list',
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '989ce876-c177-4d71-a749-1953c477f825',
        label      : 'Documentation',
        description: 'Getting started',
        icon       : 'heroicons_outline:book-open',
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '2496f42e-2f25-4e34-83d5-3ff9568fd984',
        label      : 'Help center',
        description: 'FAQs and guides',
        icon       : 'heroicons_outline:support',
        link       : '/pages/help-center',
        useRouter  : true
    },
    {
        id         : '3c48e75e-2ae7-4b73-938a-12dc655be28b',
        label      : 'Dashboard',
        description: 'User analytics',
        icon       : 'heroicons_outline:chart-pie',
        link       : '/dashboards/project',
        useRouter  : true
    },
    {
        id         : '34fb28db-4ec8-4570-8584-2414d6de796b',
        label      : 'Calendar',
        description: 'Latest appointments',
        icon       : 'heroicons_outline:calendar',
        link       : '/apps/calendar',
        useRouter  : true
    },
    {
        id         : '2daac375-a2f7-4393-b4d7-ce6061628b66',
        label      : 'Mailbox',
        description: '5 new e-mails',
        icon       : 'heroicons_outline:mail',
        link       : 'apps/mailbox',
        useRouter  : true
    },
    {
        id         : '56a0a561-17e7-40b3-bd75-0b6cef230b7e',
        label      : 'Tasks',
        description: '12 unfinished tasks',
        icon       : 'heroicons_outline:check-circle',
        link       : '/apps/tasks',
        useRouter  : true
    },
    {
        id         : 'f5daf93e-b6f3-4199-8a0c-b951e92a6cb8',
        label      : 'Contacts',
        description: 'List all contacts',
        icon       : 'heroicons_outline:user-group',
        link       : '/apps/contacts',
        useRouter  : true
    },
    {
        id         : '0a240ab8-e19d-4503-bf68-20013030d526',
        label      : 'Reload',
        description: 'Restart the app',
        icon       : 'heroicons_outline:refresh',
        link       : '/dashboards/project',
        useRouter  : false
    }
];
