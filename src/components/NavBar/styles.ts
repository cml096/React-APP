import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = styled.nav`
  background: #333;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Times = styled(FaTimes)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled(motion.div)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    background: #333;
    padding: 1rem;
    gap: 10px;
    box-sizing: border-box;
  }
`;

export const NavIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 3em;
  margin-right: 4px;
`;

export const LogoText = styled.span`
  font-size: 1.5em;
`;
