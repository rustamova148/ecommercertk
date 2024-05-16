import './Navbar.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <div>
            <li><button className='cartbtn'><NavLink to='/cart'>Cart</NavLink></button></li>
            <div className="cart-count">0</div>
            </div>
        </ul>
    </div>
  )
}

export default Navbar