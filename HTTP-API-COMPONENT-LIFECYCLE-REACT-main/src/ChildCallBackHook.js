import {memo, React} from 'react';

function ChildCallBackHook(props) {
    console.log("child rendering")
    return (
        <div>
            
        </div>
    );
}

export default memo (ChildCallBackHook);