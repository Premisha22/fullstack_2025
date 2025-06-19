import React from 'react'

const Child = ({name,phoneno,Dept}) => {
  return (
    <div>
      <h1> Name: {name} </h1>
      <h1> Phoneno: {phoneno} </h1>
      <h1> Dept: {Dept} </h1>
    </div>
  )
}

export default Child