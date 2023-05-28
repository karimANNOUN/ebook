import React from 'react'
import { Link } from 'react-router-dom'

export const OrderSuccess = ({data}) => {
  return (
    <section className='m-auto border border-slate-600  rounded-lg w-1/2 h-1/2'>
        <div className='my-6'>
        <i className="my-6 bi bi-check-circle text-7xl text-green-700  dark:text-green-500 "></i>
        <div className='my-4 '>
         <span className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Thank you {data.user.name} for order</span><br/>
         <span className='text-xl font-bold text-gray-900 dark:text-white'>Your Order ID:{data.id}</span>
        </div>
        <div className='my-4'>
            <span className='text-xl font-bold text-gray-900 dark:text-white'>Your Order is Confirmed.</span><br/>
            <span className='text-xl font-bold text-gray-900 dark:text-white'>Pleas check Your mail({data.user.email}) for the ebook </span>
        </div>
        <div className='my-6'>
        <span className='text-xl   font-bold text-gray-900 dark:text-white'>Payment ID:........</span>
        </div>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
       <Link to='/products'  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue Shopping<i className='ml-2 bi bi-cart'></i></Link>
       </div>
       </div>
    </section>
  )
}
