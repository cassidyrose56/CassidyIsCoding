import React from 'react';
import '../styles/navbar.scss';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import HamburgerMenu from './navbarComponents/HamburgerMenu'

const Navbar = () => {

    return (
        <div id='navbar'>
            <HamburgerMenu />
        </div>
    )
}

export default Navbar;


                