import React from 'react';
import { FaHome, FaUser, FaGlobe, FaUserCircle, FaTree } from 'react-icons/fa';
import type { NavbarLink } from '../../types/navbar';
import { NavLink, NavIcon } from './styles';
import { DisplayText } from './links';

const iconMapping: Record<DisplayText, JSX.Element> = {
    [DisplayText.HOME]: (
        <NavIcon>
            <FaHome />
        </NavIcon>
    ),
    [DisplayText.PROFILE]: (
        <NavIcon>
            <FaUserCircle />
        </NavIcon>
    ),
    [DisplayText.LOGIN]: (
        <NavIcon>
            <FaUser />
        </NavIcon>
    ),
    [DisplayText.GALAXIES]: (
        <NavIcon>
            <FaGlobe />
        </NavIcon>
    ),
    [DisplayText.FEATURES]: (
        <NavIcon>
            <FaTree />
        </NavIcon>
    ),
};

export const NavItem: React.FC<{ link: NavbarLink; onClick?: () => void }> = ({
    link,
    onClick,
}) => {
    const iconName = link.displayText.toLowerCase() as keyof typeof iconMapping;
    const icon = iconMapping[iconName];

    return (
        <NavLink to={link.to} onClick={onClick}>
            {icon}
            {link.displayText}
        </NavLink>
    );
};
