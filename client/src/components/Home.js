import React from 'react';
import '../styles/home.scss';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div>
            <section id='home-body'>
                <header id='navbar' className='body-text'>
                    <h1 id='logo-text' >Cassidy Johnson</h1>
                    <nav id='nav-links' className='text'>
                        <a>Personal Info</a>
                        <a>Portfolio</a>
                        <a>Contact</a>
                    </nav>
                </header>
                <section id='hero'>
                    <section id='home-left'>
                    <motion.div 
                    id='home-text' 
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2  }}
                    whileHover={{ scale: 1.05}}
                    >
                        <h1 id='hello' className='title-text'>Hi there!<br /> My name is<br/>Cassidy.</h1> 
                        <p id='describe' className='body-text'>I am a full-stack developer based in Austin. </p> 
                    </motion.div>
                    </section>
                    <section id='home-right'>

                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home;