import React, { useEffect } from 'react';

function LifCycleC(props) {
    useEffect(()=>{
        console.log("useEffect")
        })    
       return <div>
            LifCycleC
        </div>
    
}

export default LifCycleC;