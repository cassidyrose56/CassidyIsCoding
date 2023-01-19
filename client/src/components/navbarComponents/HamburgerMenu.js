import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MenuToggle from './MenuToggle';
import MenuContent from './MenuContent';
import '../../styles/navbar.scss';

const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 87% 50px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(0px at 87% 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

const menuTransition = {
    type: "spring",
    duration: 1,
    stiffness: 33,
    delay: 0.1,
};

const HamburgerMenu = () => {
    const ref = useRef();
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen])

    return (
        <div id='hamburger-menu-layout' ref={ref}>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <motion.nav id='menu-container'
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={sidebar}
                transition={menuTransition}
            >
                
                <MenuContent isOpen={isOpen} />
            </motion.nav>
        </div>
    )
};

export default HamburgerMenu;