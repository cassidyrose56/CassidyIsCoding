import React from 'react';
import Home from './components/Home.js';
import PersonalInfo from './components/PersonalInfo.js'
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js';
import Favicon from 'react-favicon'
import { motion, useScroll } from "framer-motion";
import './styles/sitewide.scss';

const App = () => {
    return (
        <div>
            <Home />
            <PersonalInfo /> 
            <Resume />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;