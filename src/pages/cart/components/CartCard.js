import React from 'react'
import { useCard } from '../../../contex'
export const CartCard = ({product}) => {
  const {removeFromCart}=useCard()
  return (
    
    <div className='flex flex-col mt-4  justify-center border border-gray-200 rounded-lg w-2/3  mx-auto dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <div className='flex flex-row'>
            <img className='max-w-48 h-32  rounded-l-lg' src={product.Poster} alt='imgpro' />
            <div className='ml-2'> 
           
            <div className='flex flex-wrap justify-between  '>
              <div><span className=' text-md font-semibold dark:text-white mr-10 mb-4 '>{product.name}</span></div>
                
          
                <div> <span className=' text-md font-semibold dark:text-white '>${product.Price}</span></div>

                
            </div>

            <div className='text-left items-end'>
                <button onClick={()=>removeFromCart(product)} className='text-white bg-red-700 mt-3 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 '>remove</button>
                </div>
                
                
            </div>

        </div>
        </div>

      
  )
}
