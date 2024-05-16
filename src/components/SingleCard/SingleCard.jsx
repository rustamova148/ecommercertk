import './SingleCard.css'
import { NavLink } from 'react-router-dom'

const SingleCard = ({id,thumbnail,title,description,price}) => {
  
  return (
    <div className='singlecard'>
    <NavLink to={`/products/${id}`}>
    <img src={thumbnail} alt="thumbnail" />
    </NavLink>
     <p>{title}</p>
     <p>{description}</p>
     <div className='priceandbtn'>
     <p>${price}</p>
     <button className='cardsingle'>Add to Cart</button>
     </div>
    </div>
  )
}

export default SingleCard