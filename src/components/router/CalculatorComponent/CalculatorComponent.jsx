// import React, { Component } from 'react'

// export class CalculatorComponent extends Component {
//   render() {
//     return (
//       <div>CalculatorComponent</div>
//     )
//   }
// }

// export default CalculatorComponen

import React, { useState } from 'react';

function CalculatorComponent() {
  const [input, setInput] = useState('');

  function handleButtonClick(e) {
    const value = e.target.value;
    setInput(input + value);
  }

  function handleClearButtonClick() {
    setInput('');
  }

  function handleCalculateButtonClick() {
    const result = eval(input);
    setInput(result.toString());
  }

  return (
    <div className="calculator flex flex-col justify-start items-center ">

      <div className="buttons grid grid-cols-4 gap-2 p-4 mt-14 min-w-[700px] min-h-[500px] max-w-[700px]">
      <div className="display bg-slate-400 text-right p-4 text-4xl font-bold col-span-4 rounded-lg overflow-hidden">{input || '0'}</div>      
        <button value="7" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>7</button>
        <button value="8" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>8</button>
        <button value="9" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>9</button>
        <button value="/" className="bg-gray-300  font-bold text-2xl p-2 rounded-full" onClick={handleButtonClick}>÷</button>
        <button value="4" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>4</button>
        <button value="5" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>5</button>
        <button value="6" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>6</button>
        <button value="*" className="bg-gray-300  font-bold text-2xl p-2 rounded-full" onClick={handleButtonClick}>x</button>
        <button value="1" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>1</button>
        <button value="2" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>2</button>
        <button value="3" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>3</button>
        <button value="-" className="bg-gray-300  font-bold text-2xl p-2 rounded-full" onClick={handleButtonClick}>-</button>
        <button value="0" className="bg-gray-300  font-bold text-2xl p-2 rounded-lg col-span-2" onClick={handleButtonClick}>0</button>
        <button value="." className="bg-gray-300  font-bold text-2xl p-2 rounded-lg" onClick={handleButtonClick}>.</button>
        <button value="+" className="bg-gray-300  font-bold text-2xl p-2 rounded-full" onClick={handleButtonClick}>+</button>
        <button value="C" className="bg-gray-300 text-black font-bold border-none text-xl p-1 rounded-lg col-span-2" onClick={handleClearButtonClick}>C</button>
        <button value="=" className="bg-blue-500 text-white font-bold text-2xl p-2 rounded-full col-span-2" onClick={handleCalculateButtonClick}>=</button>
         
        </div>
      </div>
  )
}

export default CalculatorComponent
