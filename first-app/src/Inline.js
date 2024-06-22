import React from 'react';
const  heading={fontSize:'23px'
    ,color:'blue' 
    
}

function Inline(props) {
    return (
        <div>
            <h1  style={heading}>Inline </h1>
            <h2 style={heading}>Inline 2</h2>
        </div>
    );
}

export default Inline;