import React from 'react'
import { Link } from 'react-router-dom'
import './style/header.css'

const Header = () => {
  return (
    <header>
      <nav >
        <ul className='navbar'>
          <li><Link to='/'>E-commerce</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/purchases'>Purchases</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
