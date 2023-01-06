import React, {useState} from 'react';
import '../styles/home.scss';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";

const name = require('../../../assets/name.png');

const Navbar = () => {
    return (
        <div id='navbar-layout'>
            <header id='navbar' className='body-text'>
                    <img id='navbar-text' src={name}></img>
                    <nav id='nav-links' className='text'>
                        <Link
                            activeClass="active"
                            to="info-body"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <motion.p 
                                className='p-text'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }}
                            >
                                Personal Info
                            </motion.p>
                        </Link>
                        <Link
                            activeClass="active"
                            to="resume-title"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <motion.p 
                                className='p-text'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }}
                            >
                                Resume
                            </motion.p>
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact-layout"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <motion.p 
                                className='p-text'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }}
                            >
                                Contact
                            </motion.p>
                        </Link>
                        {/* <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }}  
                        >Resume</motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }}  
                        >Contact</motion.a> */}
                    </nav>
                </header>
        </div>
    )
}

export default Navbar;


                