import React, {useState} from 'react';
import '../styles/resume.scss';
import { motion } from 'framer-motion';

// const lightQL = require('../../../assets/nobgResumeLogos/lightQL.png');
// const internHouse = require('../../../assets/nobgResumeLogos/Intern.House.png');
// const kvasir = require('../../../assets/nobgResumeLogos/kvasir-coffee.png');
// const carryOn = require('../../../assets/nobgResumeLogos/carryOn.png');

const ResumeComp = (props) => {

    const infoSection = props.info.map((str) => 
        // console.log(el);
            <li key={str}>{str}</li>
    );
    console.log(infoSection)

    return (
        <div id='resume-comp-layout'>
            <section id='title-and-pic'>
                <div id='img-box'>
                    <img id='resume-pics' src={props.pic}></img>
                </div>
                <h2 id='proj-title'>{props.proj}</h2>
                <h3 id='proj-desc'>{props.desc}</h3>
            </section>
            {/* <section id='info-sec'>
                <ul id='info-list'>
                    {infoSection}
                </ul>
            </section> */}
        </div>
    )
}

export default ResumeComp;