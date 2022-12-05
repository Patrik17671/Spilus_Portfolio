import React, {useState} from "react";
import Nav from "./components/Nav";
import SlidingNav from "./components/SlidingNav";
import Opening from "./pages/Opening";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

import {BrowserRouter as Router} from "react-router-dom";
import {inject} from '@vercel/analytics';

//Styles
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";
import CommercialProjects from "./pages/CommercialProjects";


function App() {
	//States
	const [isOpen, setIsOpen] = useState(false);
	//Functions
	const handleToggle = () => {
		setIsOpen(!isOpen);
	}
	inject();
	
	
	return (
		<Router>
			<GlobalStyles/>
			<SlidingNav isOpen={isOpen} toggle={handleToggle}/>
			<Nav toggle={handleToggle}/>
			<Opening/>
			<About/>
			<CommercialProjects/>
			<Projects/>
			<ContactMe/>
			<Footer/>
		</Router>
	);
}


export default App;
