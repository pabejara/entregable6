import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
            <li><Link to='/'>E-commerce</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
