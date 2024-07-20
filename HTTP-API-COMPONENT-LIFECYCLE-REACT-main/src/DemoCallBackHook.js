import React, { useState } from 'react';
import ChildCallBackHook from './ChildCallBackHook';

function DemoCallBackHook(props) {
    const [counter,setCounter]=useState(0)
   let myFunc=()=>{

    }
    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>increement</button>
            {counter}
            <ChildCallBackHook myFunc={myFunc} ></ChildCallBackHook>
        </div>
    );
}

export default DemoCallBackHook;