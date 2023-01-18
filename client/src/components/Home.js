import React, {useState, useEffect} from 'react';
import '../styles/home.scss';
import { motion } from 'framer-motion';

const name = require('../../../assets/name.png');
const bigSmile = require('../../../assets/big-smile.png');

const orangeSquig = require('../../../assets/blobsNsquigs/orangeSquig.png');
const confetti = require('../../../assets/blobsNsquigs/confetti.png');
const greenBlob = require('../../../assets/blobsNsquigs/greenBlob.png');
const yellowSquig = require('../../../assets/blobsNsquigs/yellowSquig.png');
const orangeBlob = require('../../../assets/blobsNsquigs/orangeBlob.png');

const Home = () => {

    return (
        <div>
            <section id='home-body'>
                <section id='hero'>
                    <section id='home-left'>
                        <motion.div 
                            id='home-text' 
                            initial={{ opacity: 0.6 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ x: 100 }}
                            transition={{ ease: "easeOut", duration: 1  }}
                            whileHover={{ scale: 1.05}}
                        >
                            <h1 
                                id='hello' 
                                className='title-text'>
                                    Hi there!<br/> My name is<br/>Cassidy.
                            </h1> 
                            <p id='describe' className='body-text'>I am a full-stack developer based in Austin. </p> 
                        </motion.div>
                    </section>
                    <section id='home-right'>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  default: {
                                    duration: 0.3,
                                    ease: [0, 0.71, 0.2, 1.00]
                                  },
                                  scale: {
                                    type: "spring",
                                    damping: 8,
                                    stiffness: 60,
                                    restDelta: 0.001
                                  }
                                }}
                                id='headshot' 
                                src={bigSmile} 
                                alt='Cassidy headshot'>
                            </motion.img>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home;