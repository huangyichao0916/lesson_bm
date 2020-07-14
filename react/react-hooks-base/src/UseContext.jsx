import React,{useContext} from  'react';
import { createContext } from 'react';

const context = createContext({
    theme:'red',
})

function UseContext (){
    return(
        <div>
            usecontext
        </div>
    )
}

export default UseContext;