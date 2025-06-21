import React from 'react'

const About = ({items,users}) => {
  return (
    <div>
      <h1>About</h1>
      <ol>
        
        {items.map((friut)=>(<li>{friut}</li>))}
      </ol>
      <h1>{users.username}</h1>
      <h1>{users.password}</h1>
    </div>
  )
}

export default About