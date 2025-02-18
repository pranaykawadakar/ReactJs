// import React from 'react'
import { Children } from 'react';
import { createRoot } from 'react-dom/client'
import { jsx as _jsx, jsx } from "react/jsx-runtime";

function App() {
  const userName = "Pranay Kawadkar";
  return (
   <h1>hello {userName}</h1>
      )
}

export default App


// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Clicke me to visit google'
// }

const clickMe = 'click me';
const reactElement = _jsx(
  'a',
  { href: 'https://google.com',
    target: '_blank',
    children: 'click me'
  }
)

createRoot(document.getElementById('root')).render(
  reactElement
)
