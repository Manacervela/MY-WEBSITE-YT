import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: transparent;
  width: 100vw;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease; 

  &.nav-scrolled {
    background: rgba(255, 255, 255, 0.3); 
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
    backdrop-filter: blur(20px); 
  }
 

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;

    @media screen and (max-width: 768px) {
    padding: 20px 0;
    
  }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 200px;
z-index: 1;
width: 100vw;
padding: 0 24px;
max-width: 1100px;
overflow: hidden;
`;

export const NavLogo = styled(LinkR)`
position: relative;
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-left: -10px;


img {
  max-height: 300px; 
  max-width: 300px;
}
`;

export const MobileIcon = styled.div` 
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: rgb(157, 151, 157);
 }`;

 export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -18px;

  @media screen and (max-width: 768px){
    display: none;
    }
`;

  export const NavItem = styled.li`
   height: 80px;
  `

  export const NavLinks = styled(LinkS)`
  color: rgb(157, 151, 157);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 16px;

  &.active {
    border-bottom: 3px solid #f38d9e;
  }


  @media screen and (max-width: 853px) {
    font-size: 14px; 

  @media screen and (min-width: 768px) {
    font-size: 12px; 
    
  @media screen and (max-width: 480px) {
    padding: 0.5rem; 
      }    
  `
  