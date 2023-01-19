import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import '../../styles/navbar.scss'

const name = require('../../../../assets/name.png');

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: 100 }
      }
    },
    closed: {
      y: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };


const MenuContent = ({ isOpen }) => {

    return (
        <nav id='nav-menu-layout' aria-label='tabpanel'>
            <motion.ul id='nav-list' aria-label='navigation tablist' variants={menuVariants}>
            <motion.li  
                    initial={false}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="nav-link"
                    aria-label='link'   
                    
                >
                    <Link
                        tabIndex={0}
                        role='link'
                        className='nav-links'
                        aria-label='menuitem tab'
                        activeClass="active"
                        to="home-body"
                        offset={-300}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <img id='menu-name' style={{textAlign: 'center'}} src={name}></img>
                    </Link>
                </motion.li>
                <motion.li  
                    initial={false}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="nav-link"
                    aria-label='link'   
                >
                    <Link
                        tabIndex={0}
                        role='link'
                        className='nav-links'
                        aria-label='menuitem tab'
                        activeClass="active"
                        to="info-body"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Personal Info
                    </Link>
                </motion.li>
                <motion.li
                    initial={false}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="nav-link"
                >
                    <Link
                        tabIndex={0}
                        role='link'
                        className='nav-links'
                        activeClass="active"
                        to="resume-layout"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Resumé
                    </Link>
                </motion.li>
                <motion.li
                    initial={false}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="nav-link"
                >
                    <Link
                        tabIndex={0}
                        role='link'
                        className='nav-links'
                        activeClass="active"
                        to="contact-layout"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </motion.li>
            </motion.ul>
        </nav>
    )
};

export default MenuContent;