import {NavbarLink} from "../../types";

export const links: Array<NavbarLink> = [
    {
        to: '/',
        displayText: 'home',
        private: false
    },
    {
        to: '/profile',
        displayText: 'profile',
        private: true
    },
    {
        to: '/login',
        displayText: 'login',
        private: false
    },
    {
        to: '/galaxies',
        displayText: 'galaxies',
        private: false
    }
];