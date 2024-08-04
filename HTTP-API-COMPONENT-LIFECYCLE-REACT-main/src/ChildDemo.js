import React from 'react';

function ChildDemo(props) {
    console.log("props",props)
    return (
        <div>
            <h1>Child data{props.name}</h1>
        </div>
    );
}

export default ChildDemo;