import React, { useCallback, useState } from 'react';
import ChildCallBackHook from './ChildCallBackHook';

function UseCallBackDemo(props) {
    const [add,setAdd]=useState(0)
    // let myFunc=()=>{
    //     // some operation 

    // }
    let myFunc=useCallback(()=>{
        // some operation 

    },[])

  
    return (
        <div>
            <button onClick={()=>setAdd(add+1)}>add</button>
            {add}
            <ChildCallBackHook myFunc={myFunc}></ChildCallBackHook>
        </div>
    );
}

export default UseCallBackDemo;