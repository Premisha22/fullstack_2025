import React from 'react'
import { Link } from 'react-router-dom'
const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Link to='/state'>useState</Link>
        <Link to='/effects'>useEffect</Link>
        <Link to='/effect2'>useEffect2</Link>
        <Link to='/reff'>Reff</Link>
        <Link to='/reducer'>Reducer</Link>
    </div>
  )
}

export default Hooks