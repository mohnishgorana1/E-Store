import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils';

function ProductsGrid() {

    const { products } = useLoaderData();

  return (
    <div className='pt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {
          products.map( (product) =>{
            const { image, title, price } = product.attributes;
            const id = product.id;
            const rupeeAmount = formatPrice(price);

            return(
                <Link 
                  key={id} 
                  to={`/products/${id}`} 
                  className='card w-[100%] shadow-xl hover:shadow-2xl transition duration-300'
                >
                  <figure className='px-4 pt-4'>
                    <img src={image}  className='rounded-xl h-64 md:h-48 w-full' />
                  </figure>
                  <div className='card-body items-center text-center'>
                    <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                    <span className='text-secondary'>{rupeeAmount}</span>
                  </div>
                
                </Link>
            )

          })  
        }
    </div>
  )
}

export default ProductsGrid