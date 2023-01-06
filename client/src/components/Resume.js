import React, {useState} from 'react';
import '../styles/resume.scss';
import ResumeComp from './ResumeComp';
import { motion } from 'framer-motion';

const lightQL = require('../../../assets/nobgResumeLogos/lightQL.png');
const internHouse = require('../../../assets/nobgResumeLogos/Intern.House.png');
const kvasir = require('../../../assets/nobgResumeLogos/kvasir-coffee.png');
const carryOn = require('../../../assets/nobgResumeLogos/carryOn.png');

const Resume = () => {

    const info = [
        {
            pic: lightQL,
            proj: 'LightQL',
            desc: 'A client-side caching tool for GraphQL',
            info: ['Designed and published an NPM package to cache GraphQL queries using in-memory caching to reduce page load times, employing Local Forage and IndexedDB to accomplish persistence between sessions by using asynchronous storage',
                'Created a custom LRU eviction policy that self sorts based on recent queries and maintains the user\'s designated capacity,implementing a doubly linked list and a hash map, allowing for constant time complexity during lookup, insertion, and deletion',
                'Used React with Hooks to build a highly interactive and responsive user interface, writing reusable components that efficiently render on the browser via a virtual DOM for a smooth user experience with minimal delay between user interaction',
                'Used React Router to enable client-side routing, reducing the number of requests made to the server and improving the speed of navigation between routes, leading to a more dynamic user experience and boosted load performance',
                'Employed CSS Grid to improve application\'s flexibility, formulating grid areas with nested components to improve user experience across mobile and desktop devices; integrated SASS to improve extensibility and clarity of stylesheets while isolating namespaces',
                'Designed and built a GraphQL schema and a PostgreSQL database to mirror a typical GraphQL user case, ensuring a realistic production environment for testing our library and ensuring a smoother product launch',
                'Adopted Typescript for its static typing to improve maintainability and increase scalability, improving the developer experience',
                'Product developed under tech accelerator OS Labs (opensourcelabs.io)']
        },
        {
            pic: internHouse,
            proj: 'Intern.House',
            desc: 'Intern shared housing company based in Austin',
            info: ['Produced application with React to display reusable components, providing responsive rendering of the user interface,       reducing repeated code blocks, and increasing scalability with React\'s innate modularization and use of the virtual DOM',
                'Designed wireframes in Figma for all UI components to remove the guesswork from frontend development process, ensure stylistic consistency throughout the site, and to cooperate with product manager on UI design',
               'Optimized Webpack configuration for code splitting, minification, and uglification to significantly reduce total server requests and improve performance of the application to provide a faster and seamless experience to the end user',
                'Implemented SCSS to increase styling consistency with variables and ease of iteration, delivering a compelling and consistent UI',
                'Deployed application using AWS Lightsail to securely serve web application, ensuring reliability and responsive load time']
        },
        {
            pic: kvasir,
            proj: 'Kvasir',
            desc: 'Chat platform to practice secondary languages with native speakers',
            info: ['Utilized React and Redux Toolkit to simplify state management across multiple functional components that allow the user to customize and update both their username and password and their preferences for languages, interests, and friends',
                'Employed Node and Express Middleware design pattern to keep backend code modular and organized despite housing a myriad of complex SQL queries to update and save user preferences and friend connections',
                'Provided secure user authentication by implementing Bcrypt to hash passwords with uniquely generated salts, and enabled JSON Web Tokens to allow for session-based user activity, ensuring that all user data remains secure']
        },
        {
            pic: carryOn,
            proj: 'CarryOn',
            desc: 'A tool for making detailed packing lists based on the location and weather',
            info: ['Constructed a Node.js/Express server to create a RESTful API with modularized middleware and async database connection that allow for user authentication, communication between frontend and NoSQL database, and interaction with OpenWeather API',
            'Used React to create functional components to cut down on page reloads and improve data management across the application',
            'Implemented CSS modules with Sass to generate locally scoped class names, avoiding class name collision in global scope and maintaining scalability of CSS code while working to match the rendered page to mockups']
        },
    ]

    const resumeComps = info.map((obj) =>
        <ResumeComp key={obj.proj} pic={obj.pic} proj={obj.proj} desc={obj.desc} info={obj.info} />
    );

    return (
        <div id='resume-layout'>
            <h1 id='resume-title'>Look what I've made!</h1>
            <section id='resume'>
                <ul>
                    {resumeComps}
                </ul>
            </section>
        </div>
    )
}

export default Resume;