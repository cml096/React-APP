import {NavbarLink} from "../../types/navbar.type";

export enum DisplayText {
    HOME = 'home',
    PROFILE = 'profile',
    LOGIN = 'login',
    GALAXIES ='galaxies'
}

export const links: Array<NavbarLink> = [
    {
        to: '/',
        displayText: DisplayText.HOME,
        private: false
    },
    {
        to: '/profile',
        displayText: DisplayText.PROFILE,
        private: true
    },
    {
        to: '/login',
        displayText: DisplayText.LOGIN,
        private: false
    },
    {
        to: '/galaxies',
        displayText: DisplayText.GALAXIES,
        private: false
    }
];