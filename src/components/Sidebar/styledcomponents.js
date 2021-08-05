import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"; //FOR LINKING TO OTHER PAGES
import { Link as LinkScroll } from "react-scroll"; //FOR LINKING WIHIN SINGLE PAGE
import { FaTimes } from "react-icons/fa";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  right: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`;

const Icon = styled.div`
  text-align: right;
  height: 5rem;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
  margin: 1.5rem 1.5rem 0 0;
  font-size: 2.125rem;
  cursor: pointer;
`;

const SidebarWrapper = styled.div`
  color: #fff;
  height: calc(100% - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SidebarMenu = styled.div``;

const SidebarLink = styled(LinkScroll)`
  color: #fff;
  margin: 2.5rem 0 2.5rem 0;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2.s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  text-align: center;
`;

const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 40px;
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
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
};
