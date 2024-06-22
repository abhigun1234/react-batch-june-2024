import React from 'react';
import './Greet.css'
import styles from './appStyle.module.css'
function Greet(props) {
    return (
        <div>
        {props.name} 
        <h1 class="color">hi</h1>   
        <h1 className={styles.error}>error</h1>   
        </div>
    );
    // return React.createElement('div',null,'Hello abhishek',React.createElement('div',null,'bye'))
}

export default Greet;