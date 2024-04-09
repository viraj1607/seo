import React from 'react'
import Logo from '../imgs/logo.png'
import { Link } from 'react-router-dom';
import '../css/header.css'

function Header() {
  return (
    <div className='header-container'>
        <Link to="/"><img src={Logo} alt="" /></Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default Header