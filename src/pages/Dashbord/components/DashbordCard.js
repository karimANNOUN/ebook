import React from 'react'
import { CartDashboerd } from './CartDashboerd'

export const DashbordCard = ({order}) => {
  return (
    <div className='max-w-7xl border border-gray-200 dark:border-gray-600 rounded-lg mx-auto my-10 px-2 '>
       <div className='flex flex-col mb-3'>
       <div className='border border-gray-200 dark:border-gray-700 rounded-lg w-full h-16 mx-auto flex justify-between items-center  mt-5'>
        <span className='text-xl font-semibold dark:text-white mx-8 '>Total Amount: ${order.amount_paid}</span>
        <span className='flex text-xl font-semibold dark:text-white mr-3 ' >OrdersID : {order.id}</span>
       </div>
        
       {order.CardList.map((product)=>(<CartDashboerd key={product.id} product={product} />))}
       
      
      </div>
  
    </div>
   
   )}
