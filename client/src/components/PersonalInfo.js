import React from 'react';
import '../styles/personal-info.scss';
import { motion } from 'framer-motion';

const html = require('../../../assets/html.png');
const css = require('../../../assets/css.png');
const sass = require('../../../assets/sass.png');
const react = require('../../../assets/react.png');
const reactRouter = require('../../../assets/react-router.png');
const mongoDB = require('../../../assets/mongodb.svg');
const postgres = require('../../../assets/postgres.png');
const graphQL = require('../../../assets/GraphQL.png');
const express = require('../../../assets/express.png');
const node = require('../../../assets/node.png');
const git = require('../../../assets/git.png');
const github = require('../../../assets/github.png');
const webpack = require('../../../assets/webpack.png');
const aws = require('../../../assets/aws.png');
const typescript = require('../../../assets/typescript.svg');

const PersonalInfo = () => {
    return (
        <div id='info-body'>
            <section id='info-left'>
                <h2 id='work-info'>

                </h2>
            </section>
            <section id='info-right'>
                <h2 id='tech-title' className='titles'>
                    Technologies I Use
                </h2>
                <section id='frontend' className='tech-sections'>
                    <h3 className='tech-section-titles'>
                        on client-side applications... 
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
                    ... and more!
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
        </div>
    )
}

export default PersonalInfo;