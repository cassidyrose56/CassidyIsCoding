import React from 'react';
import Home from './components/Home.js';
import PersonalInfo from './components/PersonalInfo.js'
import { motion, useScroll } from "framer-motion";
import './styles/sitewide.scss';

const pink = '#CA0EB7';
const green = '#1EA896';
const orange = '#FE5D26';
const white = '#FCFAFA';
const black = '#180C2C';

const App = () => {
    return (
        <motion.div
            animate={{
                backgroundColor: pink
            }}
        >
            <Home />
            <PersonalInfo /> 
        </motion.div>
    )
}

export default App;