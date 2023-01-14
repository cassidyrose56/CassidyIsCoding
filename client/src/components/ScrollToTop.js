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
            style={{opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(100px)'}}
        >
            <Link
                activeClass="active"
                to="navbar-layout"
                spy={true}
                smooth={true}
                duration={500}
                
            >
                    <i class="bi bi-caret-up" style={{fontSize: '2rem', marginBottom: '5px'}}></i>
            </Link>
        </div>
        
    );
}

export default ScrollButton;
