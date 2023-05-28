import React from 'react'
import { Link } from 'react-router-dom'

export const CartDashboerd = ({product}) => {
  return (
    <div className='flex flex-col mt-4  justify-center border border-gray-200 rounded-lg w-full mx-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        
        <div className='flex flex-row'>
            <Link to={`/products/${product.id}`} >
            <img className='w-48 h-32 rounded-l-lg' src={product.Poster} alt='dash' />
            </Link>
            
            <div className='ml-2'> 
           
            <div className='flex flex-row  '>
              <div>  <h5 className='text-xl font-semibold dark:text-white mb-4 '>{product.name}</h5></div>
          
            </div>
                
                <div className='text-left'>
                <span className=' flex mx-8 text-xl font-semibold dark:text-white '>${product.Price}</span>
                </div>
            </div>

        </div>
        </div>
  )
}
