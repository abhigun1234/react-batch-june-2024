import React, { createElement } from 'react';
import './About.css'
import style from './appStyle.module.css'
function About(props) {
    //jsx
    return (
        <div>
            <h1 className='about'>errAbout Us</h1>
            <h1 className={style.error}>About Us</h1>
        </div>
    );
   // return React.createElement('div',null,'About Us')
   //return React.createElement('div',null,createElement('h1',null,'About Us'))
}

export default About;