import React from 'react'
import { useState } from 'react';
import "./index.css";

const App = () => {

  let [Counter, setCounter] = useState(0);

  const addValue = () => {
    if(Counter < 20){
    Counter = Counter + 1;
    setCounter(Counter)
    }
  }

  const RemoveValue = () => {
    if(Counter > 0) setCounter(Counter - 1)
  }


  console.log(Counter)
    

  return (
    <>
      <div id='CounterProject'>
        <h1>Chai Aur React</h1>
        <h2>Counter Value: {Counter}</h2>

        <div className="Button">

          <button className='AddBtn'
          onClick={addValue}>Add Value</button>

          <button className='RemoveBtn'
          onClick={RemoveValue}>Remove Value</button>

        </div>

        </div>
    </>
  )
}

export default App