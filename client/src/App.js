import React from 'react';
import Home from './components/Home.js';
import PersonalInfo from './components/PersonalInfo.js'
import './styles/sitewide.scss';

const App = () => {
    return (
        <div>
            {/* <h1>Hello world!</h1> */}
            <Home />
            <PersonalInfo />
        </div>
    )
}

export default App;