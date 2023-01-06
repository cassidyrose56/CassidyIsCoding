import React, {useState} from 'react';
import { motion } from 'framer-motion';
import '../styles/sitewide.scss'
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        }
        else if (scrolled <= 300){
        setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div id='scrollBtn'
            style={{display: visible ? 'inline' : 'none'}}
        >
            <Link
                activeClass="active"
                to="navbar-layout"
                spy={true}
                smooth={true}
                duration={500}
                
            >
                    Scroll to top
            </Link>
        </div>
        
    );
}

export default ScrollButton;
