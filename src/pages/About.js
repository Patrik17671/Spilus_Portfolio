import React, {useState} from 'react';
import styled from "styled-components";
//Images
import profile2 from "../images/profile2.png";
import cool from "../images/sexy-dp.png";
//Animatios
import {motion} from "framer-motion";
import {fadeInRightAnimation, popInAnimation, useScroll1, useScroll} from "../components/animations";



const About = () => {
    //Toggle function
    const [activeClass, setActiveClass] = useState(1);
    const [element, controls] = useScroll();
    const [element1, controls1] = useScroll1();

    return (
        <StyledAbout className="" name="about">
            <StyledContainer >
                <StyledImg >
                    <motion.img src={profile2} alt="hee" ref={element1} variants={popInAnimation} initial="hidden" animate={controls1}/>
                </StyledImg>
                <StyledDescription ref={element} variants={fadeInRightAnimation} initial="hidden" animate={controls}>
                    <h2>O Mne</h2>
                    <p>Som programátor samouk. Moja cesta začala pred necelým rokom a odvtedy sa
                        programovaniu snažím venovať denne. Aj keď moje skúsenosti a prax nie sú zatiaľ
                        na vysokej úrovni, chcem sa učiť nové veci a som motivovaný sa rýchlo zlepšovať.
                    </p>
                    <ul>
                        <li className={activeClass === 1 ? "active" : ""} onClick={() => setActiveClass(1)}>Hard Skills</li>
                        <li className={activeClass === 2 ? "active" : ""} onClick={() => setActiveClass(2)}>Soft Skills</li>
                        <li className={activeClass === 3 ? "active" : ""} onClick={() => setActiveClass(3)}>Bonusy*</li>
                    </ul>
                    <StyledSkills>
                        <div className={activeClass === 1 ? "active" : "hide"}>
                            <p>HTML, CSS a JavaScript - Mierne pokročilý.</p>
                            <p>React - Mierne pokročilý.</p>
                            <p>Ďalej viem používať na základnej úrovni -
                            Adobe XD, PhotoShop, Git.</p>
                        </div>
                        <div className={activeClass === 2 ? "active" : "hide"}>
                            <p>Aktívny prístup.</p>
                            <p>Samostatnosť.</p>
                            <p>Tímová práca.</p>
                            <p>Sebamotivácia a pozitívny prístup =).</p>
                        </div>
                        <div className={activeClass === 3 ? "active" : "hide"}>
                            <p>Hm zvládnem vymeniť olej v aute.</p>
                            <p>Aj narúbať drevo.</p>
                            <p>Dokonca vyhrať WarZony.</p>
                            <img src={cool} alt="" height="50px"/>
                        </div>
                    </StyledSkills>
                </StyledDescription>
            </StyledContainer>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
  min-height: 61rem;
  background: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem ;
`;
const StyledContainer = styled(motion.div)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 800px){
    display: flex;
    flex-direction: column
  }
`;
const StyledImg = styled(motion.div)`
  min-width: 29rem;
  overflow: hidden;
  height: inherit;
  @media (max-width: 415px){
    min-width: 100%;
  }
  img{
    width: 100%;
    border-radius: 3%;
  }
  @media (max-width: 800px) {
    margin-top: 5rem;
    max-width: 38rem;
   
  }
`;
const StyledDescription = styled(motion.div)`
  max-width: 40rem;
  margin-left: 2rem;
  @media (max-width: 800px){
    margin-left: 0;
  }
  h2{
    color: white;
    margin-bottom: 2rem;
  }
  p{
    font-size: 1.2rem;
    color: #b9b9b9;
    margin-bottom: 2rem;
  }
  li{
    display: inline-flex;
    font-size: 1.5rem;
    color: white;
    padding-right: 2rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    @media (max-width: 370px){
      padding-right: 1rem;
    }
    &:hover{
      color: #F9004DFF;
    }
    &.active{
      color: #F9004DFF;
    }
  }
 
`;
const StyledSkills = styled.div`
  min-height: 15rem;
  p{
    opacity: 1;
    margin-bottom: 1rem;
    transition: all 1s ease-in-out;
  }
  div.hide{
    display: none;
    p{
      opacity: 0;
    }
  }
  div.active{
    display: block;
  }
`;


export default About;
