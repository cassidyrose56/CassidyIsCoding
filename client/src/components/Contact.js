import React, {useState, useEffect} from 'react';
import '../styles/contact.scss';
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <div id='contact-layout'>
            <motion.h1 
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1  }}
                whileHover={{ scale: 1.05}} 
                id='contact-title'>
                    Don't be a stranger!
            </motion.h1>
            <p id='contact-text'>Thanks for stopping by! I'm currently looking to join a new team of developers. If you think we might be a good fit for one another, please don't hesitate to give me a <a href="tel:6825586522" className='callEmailLink'><b>call</b></a> or send me an <a href="mailto:cassidyrose56@gmail.com" className='callEmailLink'><b>email</b></a>.</p>
            <section id='sm-section'>
                <p id='social-media-text'>Connect with me online!</p>
                <section id='sm-link-section'>
                    <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }} href='https://www.linkedin.com/in/cassidy-r-johnson/' className='sm-link' target="_blank">LinkedIn</motion.a>
                    <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }} href='https://github.com/cassidyrose56' className='sm-link' target="_blank">Github</motion.a>
                </section>
            </section>
            
        </div>
    )
}

export default Contact;