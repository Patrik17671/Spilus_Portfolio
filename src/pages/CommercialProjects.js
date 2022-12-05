import React from 'react';
import styled from "styled-components";
import ProjectsCard from "../components/ProjectsCard";
//Images
// import musicApp from "../images/musicapp.jpg";
// import gamesApp from "../images/reactApp.jpg";
import zajo from "../images/zajo.jpg";
//Animatins
import {motion} from "framer-motion";
import {useScroll, fadeAnimation} from "../components/animations";

const Projects = () => {
	
	const [element, controls] = useScroll();
	
	return (
		<StyledProjects className="" name="projects">
			<motion.h2 variants={fadeAnimation} ref={element} initial="hidden" animate={controls}>Komerčné Projekty
			</motion.h2>
			<motion.p variants={fadeAnimation} ref={element} initial="hidden" animate={controls}>
				Robil som drobnosti na veľa blueweb projektoch, napr. <a href="https://www.klenotyaurum.cz/" target="_blank" rel="noreferrer">Klenoty aurum</a>, <a href="https://www.efarby.sk/" target="_blank" rel="noreferrer">eFarby</a>, <a href="https://www.unilabs.sk/" target="_blank" rel="noreferrer">unilabs</a>, ale ukážem tu len tie, kde je vidno najviac mojej práce.
			</motion.p>
			<StyledProjectsDiv>
				<ProjectsCard
					nameOfProject="zajo"
					imgOfProject={zajo}
					description="
                    Bol to prvý projekt, ktorý som ako jeden z dvoch FE vývojárov vyvíjal od začiatku až do nasadenia.
                    Vyskúšal som si tu týždenné šprinty a nadstavovanie defaultných hodnôt až po denné statusy a
                    nestíhačky pred spustením =).
                    "
					technology="nette-latte, Tailwind, SASS, jQuery"
					link="https://www.zajo.net/sk"
					githubLink=""
				/>
			</StyledProjectsDiv>
		</StyledProjects>
	);
};

const StyledProjects = styled.div`
  height: auto;
  padding: 0 1.5rem 6rem 1.5rem;
  background: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    padding: 0 1.5rem 5rem 1.5rem;
  }

  h2 {
    padding: 6rem 0 2rem 0;
    color: white;
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
      padding: 5rem 0 2rem 0;
    }
  }

  p {
    color: #b9b9b9;
	margin-bottom: 2rem;
  }
  p a{
	color: #b9b9b9;
	font-weight: bold;
	text-decoration: underline;
  }
`;
const StyledProjectsDiv = styled.div`
  max-width: 75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 40rem;
    gap: 3rem;
  }

`;
export default Projects;
