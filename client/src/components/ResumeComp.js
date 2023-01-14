import React, {useState} from 'react';
import '../styles/resume.scss';
import { motion } from 'framer-motion';

const ResumeComp = (props) => {

    const link = '';

    const infoSection = props.info.map((str) => 
        // console.log(el);
            <li key={str}>{str}</li>
    );
    console.log(infoSection)

    return (
        <div id='resume-comp-layout'>
            <section id='title-and-pic'>
                <div id='img-box'>
                    <a></a><img id='resume-pics' src={props.pic}></img>
                </div>
                <h2 id='proj-title'>{props.proj}</h2>
                <h3 id='proj-desc'>{props.desc}</h3>
            </section>
        </div>
    )
}

export default ResumeComp;