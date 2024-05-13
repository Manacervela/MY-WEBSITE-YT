import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'; 

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <NavbarContainer>
          <NavLogo to='/' onClick={() => scroll.scrollToTop()}>
            <img
              src="/logo.png"
              alt="Logo"
              className={`logo ${isScrolled ? 'logo-hidden' : ''}`}
            />
           </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="how-to-order" smooth={true} duration={500}>How to order?</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="products" smooth={true} duration={500}>Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About us" smooth={true} duration={500}>About us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Recipes" smooth={true} duration={500}>Recipes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact-us" smooth={true} duration={500}>Contact us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;