import React, { useState } from 'react';

function Hooks(props) {
    const [person,setName]=useState({name:"abhi",age:89})
    function setData(){
         setName("raj")
    }
    return (
        <div>
            {person.name}
            <button onClick={setData}>click</button>
        </div>
    );
}

export default Hooks;