// import { useState } from 'react'
// import './App.css'

// function App() {
//    let [counter, setCounter] = useState(1)
//   // let counter = 1
//   const addValue = () => {
//     // counter += 1
//     if (counter != 20) {
//       setCounter(counter + 1)   
//       console.log(counter);
//     }
//   }

//   const removeValue = () => {
//     // counter -= 1
//     if (counter != 0) {     
//       setCounter(counter - 1)
//     }
//   }
//   return (
//     <>
//       <h1>Hello React</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button onClick={addValue}> Add Value </button>
//       <br />
//       <button onClick={removeValue}>Remove Value</button>
//     </>
//   )
// }

// export default App

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount (() => (count + 1))
    setCount (() => (count + 1))
    setCount (() => (count + 1))
  }

  return <button onClick={handleClick}>Click Me: {count}</button>;
}

export default Counter;
