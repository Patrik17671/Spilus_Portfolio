import React from 'react';
import styled from "styled-components";
import ContactForm from "../components/ContactFrom";
//Image
import profile3 from "../images/profile3.png";
//Animations
import {motion} from "framer-motion";
import { fadeInRightAnimation, popInAnimation, useScroll, useScroll1} from "../components/animations";


const ContactMe = () => {

    const [element, controls] = useScroll();
    const [element1, controls1] = useScroll1();

    return (
        <StyledContact className="" name="contactMe" >
            <StyledContainer>
                <StyledImg ref={element} variants={popInAnimation} initial="hidden" animate={controls}>
                    <img src={profile3} alt=""  />
                </StyledImg>
                <StyledForm ref={element1} variants={fadeInRightAnimation} initial="hidden" animate={controls1}>
                    <h2>Napíš Mi</h2>
                    <ContactForm />
                </StyledForm>
            </StyledContainer>
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
  padding: 10rem 1.5rem;
  overflow: hidden;
  background: #242424;
  display: flex;
  justify-content: center;
  @media (max-width: 800px){
    padding: 5rem 1.5rem
  }
`;
const StyledContainer = styled(motion.div)`
  display: inline-flex;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledForm = styled(motion.div)`
  width: 25rem;
  margin-left: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px){
    margin-left: 0;
  }
  @media (max-width: 360px){
    width: 100%;
  }
  h2{
    margin-bottom: 1rem;
  }
 
`;
const StyledImg = styled(motion.div)`
 img{
   width: 100%;
   border-radius: 3%;
 }
  @media (max-width: 960px){
    max-width: 30rem;
  }
  @media (max-width: 800px){
    max-width: 35rem;
    margin-bottom: 2rem;
  }
`;

export default ContactMe;

