import { useState } from 'react';
import { NavbarLink } from '../../types/navbar.type';
import { links } from './links';
import {
  Navbar,
  NavLink,
  Bars,
  Times,
  NavMenu,
  MobileMenu,
  Logo,
  LogoText,
} from './styles';
import { NavItem } from './NavItem';
import { FaJediOrder } from 'react-icons/fa';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <NavLink to="/">
        <Logo>
          <FaJediOrder />
        </Logo>
        <LogoText>Something</LogoText>
      </NavLink>
      {isOpen ? <Times onClick={toggle} /> : <Bars onClick={toggle} />}
      <NavMenu>
        {links.map((link: NavbarLink) => (
          <NavItem link={link} key={link.to} />
        ))}
      </NavMenu>
      {isOpen && (
        <MobileMenu
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {links.map((link: NavbarLink) => (
            <NavItem link={link} key={link.to} onClick={toggle} />
          ))}
        </MobileMenu>
      )}
    </Navbar>
  );
};
