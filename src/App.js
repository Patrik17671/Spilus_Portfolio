import React, {useState} from "react";
import Nav from "./components/Nav";
import SlidingNav from "./components/SlidingNav";
import Opening from "./pages/Opening";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

import {BrowserRouter as Router} from "react-router-dom";

//Styles
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";


function App() {
 //States
 const [isOpen, setIsOpen] = useState(false);
 //Functions
 const handleToggle = () => {
     setIsOpen(!isOpen);
 }


  return (
    <Router>
      <GlobalStyles />
      <SlidingNav isOpen={isOpen} toggle={handleToggle} />
      <Nav toggle={handleToggle}/>
      <Opening />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </Router>
  );
}


export default App;
