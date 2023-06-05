import type { NavbarLink } from '../../types/navbar';

export enum DisplayText {
    HOME = 'home',
    PROFILE = 'profile',
    LOGIN = 'login',
    GALAXIES = 'galaxies',
    FEATURES = 'features',
}

export const links: Array<NavbarLink> = [
    {
        to: '/',
        displayText: DisplayText.HOME,
        private: false,
    },
    {
        to: '/profile',
        displayText: DisplayText.PROFILE,
        private: true,
    },
    {
        to: '/login',
        displayText: DisplayText.LOGIN,
        private: false,
    },
    {
        to: '/galaxies',
        displayText: DisplayText.GALAXIES,
        private: false,
    },
    {
        to: '/features',
        displayText: DisplayText.FEATURES,
        private: false,
    },
];
