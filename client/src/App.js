import React from 'react';
import Navbar from './components/Navbar.js';
import ScrollToTop from './components/ScrollToTop.js';
import Home from './components/Home.js';
import PersonalInfo from './components/PersonalInfo.js'
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';
import Footer from './components/Footer.js';
import Favicon from 'react-favicon'
import { motion, useScroll } from "framer-motion";
import './styles/sitewide.scss';

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.`

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Home 
                title="Home"
                subtitle={dummyText}
                id="home"
            />
            <PersonalInfo 
                title="personal-info"
                subtitle={dummyText}
                id="personal-info"
            /> 
            <Resume 
                title="resume"
                subtitle={dummyText}
                id="resume"
            />
            <Contact 
                title="contact"
                subtitle={dummyText}
                id="contact"
            />
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default App;