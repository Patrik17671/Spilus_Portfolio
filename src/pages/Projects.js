import React from 'react';
import styled from "styled-components";
import ProjectsCard from "../components/ProjectsCard";
//Images
import musicApp from "../images/musicapp.jpg";
import gamesApp from "../images/reactApp.jpg";
//Animatins
import {motion} from "framer-motion";
import {useScroll, fadeAnimation} from "../components/animations";

const Projects = () => {

    const [element, controls] = useScroll();

    return (
        <StyledProjects className="" name="projects">
            <motion.h2 variants={fadeAnimation} ref={element} initial="hidden" animate={controls}>Moje Projekty</motion.h2>
            <StyledProjectsDiv>
                <ProjectsCard
                    nameOfProject="Music Player"
                    imgOfProject={musicApp}
                    description="Web aplikácia na prehrávanie hudby."
                    link="https://github.com/Patrik17671/React-music-app"
                    githubLink="https://github.com/Patrik17671/React-music-app"
                />
                <ProjectsCard
                    nameOfProject="Game Searcher"
                    imgOfProject={gamesApp}
                    description="Web aplikácia na vyhľadávanie hier robená v kurze. Naučil som sa tu prácu s API.
                                Na prácu s API som použil knižnicu Axios a na správu stavov Redux."
                    link="https://spilus-games-list-app.netlify.app/"
                    githubLink="https://github.com/Patrik17671/Games_list_react"
                />
            </StyledProjectsDiv>

        </StyledProjects>
    );
};

const StyledProjects = styled.div`
  height: auto;
  padding: 0 1.5rem 12rem 1.5rem ;
  background: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px){
    padding: 0 1.5rem 5rem 1.5rem;
  }
  h2{
    padding: 10rem 0 2rem 0;
    color: white;
    display: flex;
    justify-content: center;
    @media (max-width: 800px){
      padding: 5rem 0 2rem 0;
    }
  }
`;
const StyledProjectsDiv = styled.div`
  max-width: 75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
    max-width: 40rem;
    gap: 3rem;
  }
 
`;
export default Projects;
