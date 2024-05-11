import React from 'react'
import './SingleCard.css'
import { NavLink } from 'react-router-dom'
// import { addtoCart } from '../../redux/service/cartSlice'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'

const SingleCard = ({p}) => {
// const dispatch = useDispatch();
// const {items} = useSelector((state)=>state.items)

  return (
    <div className='singlecard'>
    <NavLink to={`/products/${p.id}`}>
    <img src={p.thumbnail} alt="" />
    </NavLink>
     <p>{p.title}</p>
     <p>{p.description}</p>
     <div className='priceandbtn'>
     <p>${p.price}</p>
     <button className='cardsingle'>Add to Cart</button>
     </div>
    </div>
  )
}

export default SingleCard