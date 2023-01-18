import React from 'react';
import '../styles/home.scss';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

const bigSmile = require('../../../assets/bigSmile.jpg');

// const orangeSquig = require('../../../assets/blobsNsquigs/orangeSquig.png');
// const confetti = require('../../../assets/blobsNsquigs/confetti.png');
// const greenBlob = require('../../../assets/blobsNsquigs/greenBlob.png');
// const yellowSquig = require('../../../assets/blobsNsquigs/yellowSquig.png');
// const orangeBlob = require('../../../assets/blobsNsquigs/orangeBlob.png');



const Home = () => {

    const isDesktop = useMediaQuery({ query: '(min-width: 661px), { deviceWidth: 1600 }' });
    const isMobile = useMediaQuery({ query: '(max-width: 660px)' });

    return (
        <div>


            <section id='home-body'>

                {isDesktop &&
                    <section id='hero'>
                        <section id='home-left'>
                            <motion.div
                                id='home-text'
                                initial={{ opacity: 0.6 }}
                                whileInView={{ opacity: 1 }}
                                animate={{ x: 100 }}
                                transition={{ ease: "easeOut", duration: 1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h1
                                    id='hello'
                                    className='title-text'>
                                    Hi there!<br /> My name is<br />Cassidy.
                                </h1>
                                <h2 id='describe' className='body-text'>I am a full-stack developer based in Austin. </h2>
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
                }
                {isMobile &&
                        <section id='hero'>
                                <motion.div
                                    id='home-text'
                                    initial={{ opacity: 0.6 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ ease: "easeOut", duration: 1 }}
                                   
                                >
                                    <h1
                                        id='hello'
                                        className='title-text'>
                                        Hi there!<br /> My name is<br />Cassidy.
                                    </h1>

                                    <motion.img
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
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
                                    <h2 id='describe' className='body-text'>I am a full-stack developer based in Austin. </h2>
                                </motion.div>
                        </section>
                }
            </section>


        </div>
    )
}

export default Home;