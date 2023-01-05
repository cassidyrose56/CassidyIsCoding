import React from 'react';
import Home from './components/Home.js';
import PersonalInfo from './components/PersonalInfo.js'
import Contact from './components/Contact.js';
import Favicon from 'react-favicon'
import { motion, useScroll } from "framer-motion";
import './styles/sitewide.scss';

const App = () => {
    return (
        <div>
            <Home />
            <div id='white-line'></div>
            <PersonalInfo /> 
            <div id='white-line'></div>
            <Contact />
        </div>
    )
}

export default App;