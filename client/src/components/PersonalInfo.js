import React, {useState} from 'react';
import '../styles/personal-info.scss';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { ButtonBack, ButtonNext,
    CarouselProvider, Image, Slide, Slider, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const html = require('../../../assets/techStack/html.png');
const css = require('../../../assets/techStack/css.png');
const sass = require('../../../assets/techStack/sass.png');
const react = require('../../../assets/techStack/react.png');
const reactRouter = require('../../../assets/techStack/react-router.png');
const mongoDB = require('../../../assets/techStack/mongodb.svg');
const postgres = require('../../../assets/techStack/postgres.png');
const graphQL = require('../../../assets/techStack/GraphQL.png');
const express = require('../../../assets/techStack/express.png');
const node = require('../../../assets/techStack/node.png');
const git = require('../../../assets/techStack/git.png');
const github = require('../../../assets/techStack/github.png');
const webpack = require('../../../assets/techStack/webpack.png');
const aws = require('../../../assets/techStack/aws.png');
const typescript = require('../../../assets/techStack/typescript.svg');

const lightQL = require('../../../assets/LightQL-removebg-preview.png');
const internHouse = require('../../../assets/Intern.House-removebg-preview.png');

const PersonalInfo = () => {

    const [index, setIndex] = useState(0); 
    const [projName, setProjName] = useState('LightQL');
    const [link, setLink] = useState('https://www.lightql.com/');
    const length = 2;

    const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 850px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 849px)' });

    const handlePrevious = () => {
        const newIndex = index - 1;
        if (newIndex === 1) {
            setProjName('Intern.House');
            setLink('https://www.intern.house/');
            
        } else {
            setProjName('LightQL');
            setLink('https://www.lightql.com/');
        }
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        if (newIndex === 1) {
            setProjName('Intern.House')
            setLink('https://www.intern.house/')
        } else {
            setProjName('LightQL');
            setLink('https://www.lightql.com/');
        }
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div id='info-body'>
            <motion.h1 
                id='info-title'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                It's great to meet you!
            </motion.h1>
            <section id='info-left'>
                <h2 id='work-info'>
                    I'm passionate about creating inspiring and human-centric applications. 
                </h2>
                <h3 id='work-details'>
                    I love designing and building responsive, accessible web apps that can be used by anyone, anywhere. <a id='talk-link' href='https://www.linkedin.com/feed/update/urn:li:activity:7008487028233310208/' target="_blank">You can check out a talk I gave on web accessibility here!</a> <br /> <br /> I have strong experience with Javascript, creating multiple full-stack websites with React.js, Node.js, Express, and both PostgreSQL and MongoDB databases. 
                </h3>
            </section>
            <section id='info-right'>
                <h2 id='project-title' className='titles'>Recent Projects</h2>
                { isDesktopOrTablet &&
                    <CarouselProvider
                        id='carousel'
                        visibleSlides={1}
                        totalSlides={2}
                        step={1}
                        hasMasterSpinner
                        naturalSlideWidth={100}
                        naturalSlideHeight={70}  
                        // isIntrinsicHeight
                        dragEnabled={false}
                        infinite
                    >
                        <div  style={{position:'relative'}}>
                            <Slider id='sliders'>
                                <Slide index={0}>
                                    <Image src={lightQL} className='carousel-image' style={{height:'230px', width:'auto'}} />
                                </Slide>
                                <Slide index={1}>
                                    <Image src={internHouse} className='carousel-image' style={{height:'230px', width:'auto'}} />
                                    
                                </Slide>
                            </Slider>
                            <ButtonBack onClick={handlePrevious} className='slider-btns' style={{left: 0}}><i className="bi bi-caret-left-fill" style={{fontSize: '2.5rem'}}></i></ButtonBack>
                            <ButtonNext onClick={handleNext} className='slider-btns' style={{right: 0}}><i className="bi bi-caret-right-fill" style={{fontSize: '2.5rem'}}></i></ButtonNext> 
                            {/* <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }} id='proj-name' href={link} target="_blank">Check it out here!</motion.a>  */}
                        </div>
                    
                    </CarouselProvider>
                }
                
                {isMobile && 
                    <CarouselProvider
                    id='carousel'
                    visibleSlides={1}
                    totalSlides={2}
                    step={1}
                    naturalSlideWidth={80}
                    naturalSlideHeight={100}  
                    dragEnabled={false}
                    infinite
                >
                    <div  style={{position:'relative'}}>
                        <Slider id='sliders'>
                            <Slide index={0}>
                                <Image src={lightQL} className='carousel-image' style={{height:'140px', width:'auto'}} />
                            </Slide>
                            <Slide index={1}>
                                <Image src={internHouse} className='carousel-image' style={{height:'140px', width:'auto'}} />
                                
                            </Slide>
                        </Slider>
                        <ButtonBack onClick={handlePrevious} className='slider-btns' style={{left: -50}}><i class="bi bi-caret-left-fill" style={{fontSize: '2.5rem'}}></i></ButtonBack>
                        <ButtonNext onClick={handleNext} className='slider-btns' style={{right: -50}}><i class="bi bi-caret-right-fill" style={{fontSize: '2.5rem'}}></i></ButtonNext> 
                        {/* <a id='proj-name' href={link} target="_blank">Check it out here!</a>  */}
                    </div>
                   
                </CarouselProvider>
                
                }
                <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} 
                            whileInView={{ opacity: 1 }} id='proj-name' href={link} target="_blank">Check it out here!</motion.a> 

            </section>
            <section id='info-bottom'>
                <h2 id='tech-title' className='titles'>
                    Technologies I Use
                </h2>
                <section id='techs'>
                    <section id='frontend' className='tech-sections'>
                        <h3 className='tech-section-titles'>
                            on the frontend... 
                        </h3>
                        <section id='frontend-icons' className='icon-sections'>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }} 
                                src={html} id='html' className='icon' title='HTML' alt='HTML'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }}  src={css} id='css' className='icon' title='CSS' alt='CSS'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }}  src={sass} id='sass' className='icon' title='Sass' alt='Sass'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }}  src={react} id='react' className='icon' title='React' alt='React'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} 
                                whileInView={{ opacity: 1 }}  src={reactRouter} id='react-router' className='icon' title='React Router' alt='React Router'></motion.img>
                        </section>
                    </section>
                    <section id='backend' className='tech-sections'>
                        <h3 className='tech-section-titles'>
                            the backend...
                        </h3>
                        <section id='backend-icons' className='icon-sections'>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={node} id='node' className='icon' title='Node.js' alt='node.js'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={express} id='express' className='icon' title='Express' alt='express'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={mongoDB} id='MongoDB' className='icon' title='MongoDB' alt='mongodb'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={postgres} id='PostgreSQL' className='icon' title='PostgreSQL' alt='PostgreSQL'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={graphQL} id='graphQL' className='icon' title='GraphQL' alt='GraphQL'></motion.img>
                        </section>
                    </section>
                    <section id='more' className='tech-sections'>
                        <h3 className='tech-section-titles'>
                        and more!
                        </h3>
                        <section id='more-icons' className='icon-sections'>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={git} id='git' className='icon' title='Git' alt='Git'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={github} id='github' className='icon' title='Github' alt='Github'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={webpack} id='webpack' className='icon' title='Webpack' alt='Webpack'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }} src={aws}id='aws' className='icon' title='AWS' alt='AWS'></motion.img>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileInView={{ opacity: 1 }}mg src={typescript} id='typescript' className='icon' title='Typescript' alt='Typescript'></motion.img>
                        </section>
                    </section> 
                </section>
                
            </section>
        </div>
    )
}

export default PersonalInfo;