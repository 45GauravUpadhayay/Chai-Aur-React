import React from 'react'
import { useState } from 'react';
import './index.css'

const App = () => {

    let [Counter , setCounter] = useState(0);

    const addValue = () => {
        if(Counter < 20){
            Counter = Counter + 1;
            setCounter(Counter);
        }
    }

    const removeValue = () => {
        if(Counter > 0) setCounter(Counter-1)
    }



  return (
    <>
        <div className="counterApp">
            <h1 className='mainHeading'>Counter App</h1>
            <h3 className='smallHeading'>Count: {Counter}</h3>
            <div className="buttons">
                <button className='btn1'  onClick={addValue}>Add Value</button>
                <button className='btn2' onClick={removeValue}>Remove Value</button>
            </div>
        </div>
    </>
  )
}

export default App
