import React, { createElement } from 'react';

function About(props) {
    //jsx
    // return (
    //     <div>
    //         <h1>About Us</h1>
    //     </div>
    // // );
   // return React.createElement('div',null,'About Us')
   return React.createElement('div',null,createElement('h1',null,'About Us'))
}

export default About;