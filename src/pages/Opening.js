import React from 'react';
import styled from "styled-components";
//Image
import bg from "../images/o-bg1.jpg"
//Animations
import {motion} from "framer-motion";
import {titleAnimation, pageAnimation} from "../components/animations";


const Opening = () => {

    return (
        <StyledOpening className="" name="opening">
            <StyledBackground>
                <StyledDescription variants={pageAnimation} initial="hidden" animate="show">
                    <StyledHide>
                        <motion.h1 variants={titleAnimation}>Ahoj, Vitaj u mňa.</motion.h1>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>Som Patrik. </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>Začínajúci Programátor.</motion.h2>
                    </StyledHide>
                </StyledDescription>

            </StyledBackground>
        </StyledOpening>
    );
};
const StyledHide = styled.div`
  overflow: hidden;
`;
const StyledOpening = styled(motion.div)`
  height: 61rem;
  background: black;
  margin: 0 auto;
`;
const StyledBackground = styled(motion.div)`
  height: 100%;
  padding: 0 1.5rem;
  background: url(${bg}) center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDescription = styled(motion.div)`
  min-width: 20rem;
  color: white;
  @media (max-width: 530px){
    h1{
      font-size: 2.5rem;
    }
    h2{
      font-size: 2rem;
    }
  }
`;


export default Opening;
