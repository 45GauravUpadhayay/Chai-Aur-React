import React from 'react'
import { useState } from 'react';
import "./index.css";

const App = () => {

  let [Counter, setCounter] = useState(0);

  // let Counter = 5;

  const addValue = () => {
    console.log("Clicked", Counter);
    Counter = Counter + 1;
    setCounter(Counter)
    console.log("Clicked", Counter);
  }


  const RemoveValue = () => {
    setCounter(Counter - 1)
  }
    

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