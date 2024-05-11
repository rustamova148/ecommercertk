import React from 'react'
import './CardDetailc.css'
import { useParams } from 'react-router-dom'
import { useGetAllProductsQuery } from '../../redux/service/dummyData'

const CardDetailc = () => {
const {id} = useParams();
const {data, isError, isLoading} = useGetAllProductsQuery();

if (isError) {
return <h1>We have an error!</h1>
}

if(isLoading) {
    return <h1>Loading...</h1>
}

const newData = data.products.map((p)=>p);
console.log(newData)

  return (
  <div className='cardetail'>
  <img src={newData[id-1].thumbnail} alt="Product Thumbnail"/> 
  <p>{newData[id-1].title}</p>
  <p>${newData[id-1].price}</p>
  </div>
  )
}

export default CardDetailc