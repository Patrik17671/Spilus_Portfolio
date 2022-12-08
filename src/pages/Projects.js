import React from 'react';
import styled from "styled-components";
import ProjectsCard from "../components/ProjectsCard";
//Images
// import musicApp from "../images/musicapp.jpg";
// import gamesApp from "../images/reactApp.jpg";
import nextEcommerce from "../images/next-ecommerce.jpg";
import feMentor from "../images/fe-mentor.jpg";
//Animations
import {motion} from "framer-motion";
import {useScroll, fadeAnimation} from "../components/animations";

const Projects = () => {

    const [element, controls] = useScroll();

    return (
        <StyledProjects className="" name="projects">
            <motion.h2 variants={fadeAnimation} ref={element} initial="hidden" animate={controls}>Moje Projekty</motion.h2>
            <StyledProjectsDiv>
                <ProjectsCard
                    nameOfProject="ecommerce projekt"
                    imgOfProject={nextEcommerce}
                    description="Vyskúšal som si prácu so Strapi CMS a vytvoril som jednoduchý eshop,
                    na ťahanie dát som použil GraphQL a na správu globálnych stavov som si vyskúšal prácu s reduxom."
                    technology="Next.js, Strapi, Redux, GraphQL, Tailwind"
                    link="https://spilus-ecommerce.vercel.app/"
                    githubLink="https://github.com/Patrik17671/Strapi-next-ecommerce"
                />
                <ProjectsCard
                    nameOfProject="FE mentor štáty"
                    imgOfProject={feMentor}
                    description="Tu som spravil svoju prvú filtráciu a naučil sa dynamicky
                     generovať stráky pre jednotlivé štáty."
                    technology="Next.js, Tailwind"
                    link="https://fe-mentor-countries.vercel.app/"
                    githubLink="https://github.com/Patrik17671/FE-mentor-flags"
                />
                {/*<ProjectsCard*/}
                {/*    nameOfProject="Game Searcher"*/}
                {/*    imgOfProject={gamesApp}*/}
                {/*    description="Web aplikácia na vyhľadávanie hier robená v kurze. Naučil som sa tu prácu s API.*/}
                {/*                Na prácu s API som použil knižnicu Axios a na správu stavov Redux."*/}
                {/*    link="https://spilus-games-list-app.netlify.app/"*/}
                {/*    githubLink="https://github.com/Patrik17671/Games_list_react"*/}
                {/*/>*/}
            </StyledProjectsDiv>

        </StyledProjects>
    );
};

const StyledProjects = styled.div`
  height: auto;
  padding: 0 1.5rem 6rem 1.5rem ;
  background: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px){
    padding: 0 1.5rem 5rem 1.5rem;
  }
  h2{
    padding: 6rem 0 2rem 0;
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
