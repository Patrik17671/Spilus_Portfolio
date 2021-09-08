import React from 'react';
import styled from "styled-components";

import {popInAnimation, useScroll} from "./animations";
import {motion} from "framer-motion";



const ProjectsCard = ({nameOfProject, imgOfProject, description, link, githubLink }) => {

    const [element, controls] = useScroll();

    return (
        <StyledCard variants={popInAnimation} ref={element} initial="hidden" animate={controls}>
            <h4>{nameOfProject}</h4>
            <img src={imgOfProject} alt="" />
            <p>{description}</p>
            <div><a href={link} rel="noreferrer" target="_blank">Ukážka</a> <a href={githubLink} rel="noreferrer" target="_blank">GitHub</a></div>
        </StyledCard>
    );
};

const StyledCard = styled(motion.div)`
  padding: 1.5rem;
  background: #242424;
  border-radius: 0.5rem;
  transition: all 0.3s linear;
  &:hover{
    background: linear-gradient(245deg, rgba(231,1,125,1) 0%, rgba(255,0,0,1) 100%);
    transform: scale(1.05)!important;
    p{
      color: white;
    }
  }
  h4{
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 1rem;
  }
  p{
    color: #b9b9b9;
    text-align: center;
    margin: 1rem 0;
  }
  img{
    width: 100%;
  }
  div{
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    a{
      color: white;
      padding: 0.5rem 1rem;
      border: 2px solid #b9b9b9;
      transition: all 0.3s ease-in-out;
      &:hover{
        transform: translateY(-0.3rem);
      }
    }
  }
`;

export default ProjectsCard;
