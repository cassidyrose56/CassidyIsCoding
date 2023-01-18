import React, {useState} from 'react';
import '../styles/resume.scss';
import { motion } from 'framer-motion';

const ResumeComp = (props) => {

    const infoSection = props.info.map((str) => 
        <li key={str}>{str}</li>
    );
    console.log(infoSection)

    return (
        <div id='resume-comp-layout'>
            <section id='title-and-pic'>
                <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                    id='img-box' 
                    
                    title={props.proj + ' Github Repository'}
                    href={props.link} 
                    target='_blank'
                >
                    <img alt={props.proj + ' Github Repository'} id='resume-pics' src={props.pic}></img>
                </motion.a>
                <h2 id='proj-title'>{props.proj}</h2>
                <h3 id='proj-desc'>{props.desc}</h3>
            </section>
        </div>
    )
}

export default ResumeComp;