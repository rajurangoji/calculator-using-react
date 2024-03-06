import React, { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue)

  const handelinput = (value) => {
    setInputValue(inputValue + value)
  }

  const handelcalculate = () => {
    setInputValue(eval(inputValue))

  }
  const handlereset = () =>{
    setInputValue('')
  }
  return (
    <div>
      <div className='container-input'>
        <input type="text" name="text" id="value" value={inputValue || 0} readOnly/>
      </div>
      <div className='container-buttons'>
        <div>
          <button onClick={() => handelinput('1')}>1</button>
          <button onClick={() => handelinput('2')}>2</button>
          <button onClick={() => handelinput('3')}>3</button>
          <button onClick={() => handelinput('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handelinput('4')}>4</button>
          <button onClick={() => handelinput('5')}>5</button>
          <button onClick={() => handelinput('6')}>6</button>
          <button onClick={() => handelinput('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handelinput('7')}>7</button>
          <button onClick={() => handelinput('8')}>8</button>
          <button onClick={() => handelinput('9')}>9</button>
          <button onClick={() => handelinput('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handlereset()}>Reset</button>
          <button onClick={() => handelinput('/')}>/</button>
          <button onClick={() => handelinput('**')}>**</button>
          <button onClick={() => handelcalculate()}>=</button>
        </div>

      </div>

    </div>
  )
}

export default App
