import React, {useState} from 'react';
import '../styles/personal-info.scss';
import { motion } from 'framer-motion';
import { ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
    CarouselProvider, DotGroup, Image, Slide, Slider, } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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

const lightQL = require('../../../assets/LightQL.png');
const internHouse = require('../../../assets/Intern.House.png');

const PersonalInfo = () => {

    const [index, setIndex] = useState(0); 
    const [projName, setProjName] = useState('LightQL');
    const [link, setLink] = useState('lightql.com');
    const length = 2;

    const handlePrevious = () => {
        const newIndex = index - 1;
        if (newIndex === 1) {
            setProjName('Intern.House');
            setLink('https://www.intern.house/');
            setLink('lightql.com');
        } else {
            setProjName('LightQL');
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
            setLink('lightql.com');
        }
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div id='info-body'>
            <h1 id='info-title'>It's great to meet you!</h1>
            <section id='info-left'>
                <h2 id='work-info'>

                </h2>
            </section>
            <section id='info-right'>
                <h2 id='project-title'>Projects</h2>
                <CarouselProvider
                    id='carousel'
                    visibleSlides={1}
                    totalSlides={2}
                    step={1}
                    naturalSlideWidth={300}
                    naturalSlideHeight={500}  
                    isIntrinsicHeight  
                    infinite
                    hasMasterSpinner
                >
                    <div style={{position:'relative'}}>
                        <Slider>
                            <Slide index={0}>
                                <Image src={lightQL} style={{height:'200px', width:'auto', borderRadius: '50%'}} />
                            </Slide>
                            <Slide index={1}>
                                <Image src={internHouse} style={{height:'200px', width:'auto', borderRadius: '50%'}} />
                            </Slide>
                        </Slider>
                        <ButtonBack onClick={handlePrevious} className='slider-btns' style={{left: 0}}>Back</ButtonBack>
                        <ButtonNext onClick={handleNext} className='slider-btns' style={{right: 0}}>Next</ButtonNext> 
                    </div>
                   <a id='proj-name' href={link} target="_blank">{projName}</a> 
                </CarouselProvider>
                
            </section>
            <section id='info-bottom'>
                <h2 id='tech-title' className='titles'>
                    Technologies I Use
                </h2>
                <section id='techs'>
                    <section id='frontend' className='tech-sections'>
                        <h3 className='tech-section-titles'>
                            on frontend applications... 
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
                            backend applications...
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