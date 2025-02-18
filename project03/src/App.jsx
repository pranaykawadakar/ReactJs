import React from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
  let users = [{userName : "pranay", email : " pranay@gmail.com" },
  {userName : "tanvi", email : " tanvi@gmail.com" },
  {userName : "rohit", email : " rohit@gmail.com" }
  ]
  return (
    <>
    {users.map((user, index) => (    
     <Card key = {index} user = {user} />
    ))}
    </>
  )
}

export default App
