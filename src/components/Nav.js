import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Link as LinkRouter} from "react-router-dom";
import {Link as LinkScroll, animateScroll as scroll} from "react-scroll";
import {FaBars} from "react-icons/fa";

import {FaRegArrowAltCircleUp} from "react-icons/fa"

const Nav = ({toggle}) => {
    //State
    const [scrollNav, setScrollNav] = useState(false);
    //Functions
    const changeNav = () => {
      if(window.scrollY >= 80 ){
          setScrollNav(true);
      }else {
          setScrollNav(false);
      }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);


    return (
        <StyledNav scrollNav={scrollNav}>
            <StyledNavDiv>
                <NavLogo to="/" onClick={toggleHome} >Spilus</NavLogo>
                <Hamburger onClick={toggle}>
                    <FaBars />
                </Hamburger>
                <ul>
                    <li>
                        <NavLinks to="opening" smooth={true} duration={400} spy={true}  offset={-80}>Úvod</NavLinks>
                    </li>
                    <li>
                        <NavLinks to="about" smooth={true} duration={400} spy={true}  offset={-80}>O mne</NavLinks>
                    </li>
                    <li>
                        <NavLinks to="projects"  smooth={true} duration={400} spy={true} offset={-80}>Projekty</NavLinks>
                    </li>
                    <li>
                        <NavLinks to="contactMe"  smooth={true} duration={400} spy={true}  offset={-80}>Napíš mi</NavLinks>
                    </li>
                </ul>
            </StyledNavDiv>
            <StyledUpIcon scrollNav={scrollNav}>
                <FaRegArrowAltCircleUp onClick={toggleHome} />
            </StyledUpIcon>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? "#191919" : "transparent")} ;
  height: 6rem;
  margin-top: -6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.5s all ease;
  
  @media (max-width: 960px) {
    transition: 0.5s all ease ;
  }
`
const StyledNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 100%;
  padding: 0 2rem;
  max-width: 1200px;
  ul{
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -1.5rem;
    li{
      height: 50%;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const NavLogo = styled(LinkRouter)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  font-family: 'Lobster', cursive;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  font-weight: bold;
`;
const Hamburger = styled.div`
  display: none;
  color: white;
  
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavLinks = styled(LinkScroll)`
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin: 0 1rem;
  transition: all .3s ease-in-out;
  &:hover{
    transform: translateY(-0.2rem);
    color: #f9004d;
  }
  &.active {
    transform: translateY(-0.2rem);
    color: #f9004d;
    border-bottom: 3px solid #f9004d;
  }
`;
const StyledUpIcon = styled.div`
  font-size: 3rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding-right: 1rem;
  cursor: pointer;
  color: rgba(185, 185, 185, 0.5);
  opacity: ${({scrollNav}) => (scrollNav ? "1" : "0")};
  animation: jump 0.5s alternate infinite;
  transition: 0.5s all ease;
  @keyframes jump {
    0% {
      transform: translateY(0)
    }
    100% {
      transform: translateY(-.5rem)
    }
  }
`;

export default Nav;
