import React from 'react';
import styled from "styled-components";
import {GoMarkGithub} from "react-icons/go";
import {IoLogoLinkedin} from "react-icons/io";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <StyledFooter>
            <ul>
                <li><a href="https://github.com/Patrik17671" rel="noreferrer" target="_blank"><GoMarkGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/patrik-spilka-7baaa320a/"  rel="noreferrer" target="_blank"><IoLogoLinkedin /></a></li>
                <li><a href="https://www.instagram.com/patrik_spilus/" rel="noreferrer" target="_blank"><FiInstagram /></a></li>
            </ul>
        <p>Copyright © {currentYear} <em>Spilus</em> All Rights Reserved.</p>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
  min-height: 13rem;
  background: #101010;
  text-align: center;
  p{
    color: #b9b9b9;
    margin-top: 3rem;
  }
  svg{
    font-size: 1.5rem;
    color: white;
  }
  ul{
    display: inline-flex;
    padding-top: 1rem;
  }
  a{
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
    border: 2px solid #b9b9b9;
    margin: 0 1rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
  &:hover{
    transform: translateY(-0.3rem);
    background: #f9004d;
    svg{
      color: white;
    }
}
  }
`;

export default Footer;
