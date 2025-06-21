import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav className = 'navbar'>
        <Link to='/' className = 'Link'>Home</Link>
        <Link to='/about' className = 'Link'>About</Link>
        <Link to='/skills' className = 'Link'>Skills</Link>
        <Link to='/contact'className = 'Link'>Contact</Link>
        <Link to='/counter'className = 'Link'>Counter</Link>
        <Link to='/hooks'className = 'Link'>Hooks</Link>
        <Link to='/login'className = 'Link'>Login</Link>
      
        
        </nav>
    </div>
  )
}

export default Nav
