import React from 'react'
import { useGetAllProductsQuery } from '../../redux/service/dummyData';
import SingleCard from '../SingleCard/SingleCard';
import './Productsec.css'


const Productsec = () => {

const {data, isError, isLoading} = useGetAllProductsQuery();

if (isError) {
return <h1>We have an error!</h1>
}

if(isLoading) {
    return <h1>Loading...</h1>
}

console.log(data);

  return (
    <div className='productsec'>
        {data?.products.map((p) =>(
            <SingleCard p={p} />
        ))}
    </div>
  )
}

export default Productsec