import {NavbarLink} from "../../utils/navbar.type";

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
        to: '/countries',
        displayText: 'countries',
        private: false
    }
];