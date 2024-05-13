import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="how-to-order" onClick={toggle}>How to order?</SidebarLink>
          <SidebarLink to="products" onClick={toggle}>Products</SidebarLink>
          <SidebarLink to="About us" onClick={toggle}>About us</SidebarLink>
          <SidebarLink to="Recipes" onClick={toggle}> Recipes</SidebarLink>
          <SidebarLink to="contact-us" onClick={toggle}>Contact us</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
