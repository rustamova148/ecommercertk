import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <p>Footer</p>
      <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li>Contacts: e-store@gmail.com, +994708345678</li>
            <li>© 2024 E-commerce wbs.</li>
      </ul>
    </div>
  )
}

export default Footer