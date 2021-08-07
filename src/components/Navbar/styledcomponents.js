import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"; //FOR LINKING TO OTHER PAGES
import { Link as LinkScroll } from "react-scroll"; //FOR LINKING WIHIN SINGLE PAGE
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "rgb(0,0,0)")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

const HamburgerMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const Bar = styled(FaBars)`
  color: #fff;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 18px;
  height: 80px;
  margin: 0 0.75rem 0 0.75rem;
`;

const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 2.5px solid #01bf71;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 24px;
  color: #010606;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerMenu,
  Bar,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
};
