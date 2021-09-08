import React from 'react';
import styled from "styled-components";
import {IoMdClose} from "react-icons/io";
import {Link as LinkScroll} from "react-scroll";

const SlidingNav = ({isOpen, toggle}) => {
    return (
        <StyledSlidingNav isOpen={isOpen} onClick={toggle}>
            <StyledIcon onClick={toggle}>
                <IoMdClose />
            </StyledIcon>
            <StickyWrapper>
                <SlidingMenu>
                    <SlidingLinks to="opening" onClick={toggle}>Úvod</SlidingLinks>
                    <SlidingLinks to="about" onClick={toggle}>O Mne</SlidingLinks>
                    <SlidingLinks to="projects" onClick={toggle}>Projekty</SlidingLinks>
                    <SlidingLinks to="contactMe" onClick={toggle}>Napíš mi</SlidingLinks>
                </SlidingMenu>
            </StickyWrapper>
        </StyledSlidingNav>
    );
};

const StyledSlidingNav = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease;
  opacity: ${({isOpen}) => (isOpen ? "100%" : "0%")};
  top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`;
const StyledIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  svg{
    color: white;
  }
`;
const StickyWrapper = styled.div`
  color: white;
  padding-top: 5rem;
`;
const SlidingMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 5rem) ;
  text-align: center;
  @media (max-width: 480px){
    grid-template-rows: repeat(6, 4rem) ;
  }
`;
const SlidingLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-out;
  color: white;
  cursor: pointer;

  &:hover {
    background: #212121;
    transition: 0.2s ease-in-out;
  }
`;
export default SlidingNav;
