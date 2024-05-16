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
        {data?.products.map((p,i) =>(
            <SingleCard id={p.id} key={i} thumbnail={p.thumbnail} title={p.title}
            description={p.description} price={p.price} />
        ))}
    </div>
  )
}

export default Productsec