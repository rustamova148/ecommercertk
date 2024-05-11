import React from 'react'
import './Cartc.css'
import { NavLink } from 'react-router-dom'

const Cartc = () => {
  return (
    <div>
        <NavLink to='/products'><p>Continue Shopping</p></NavLink>
        <p>CART IS EMPTY (0)</p>
    </div>
  )
}

export default Cartc