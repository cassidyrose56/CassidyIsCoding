import React from 'react';
import Home from './components/Home.js';
import PersonalInfo from './components/PersonalInfo.js'
import Contact from './components/Contact.js';
import { motion, useScroll } from "framer-motion";
import './styles/sitewide.scss';

// const pink = '#CA0EB7';
// const green = '#1EA896';
// const orange = '#FE5D26';
// const white = '#FCFAFA';
// const black = '#180C2C';

const App = () => {
    return (
        <div>
            <Home />
            <PersonalInfo /> 
            <Contact />
        </div>
    )
}

export default App;