import React from 'react'
import { Link } from 'react-router-dom'
export const OrderFailed = () => {
  return (
    <section className='mx-auto mt-12 border border-slate-600  rounded-lg w-1/2 h-1/2'>
    <div className='my-6'>
    <i className="my-6 bi bi-exclamation-circle text-7xl text-red-700  dark:text-red-500 "></i>
    <div className='my-4 '>
     <span className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Payment Failed Please, try again</span><br/>
     
    </div>
    <div className='my-6'>
        <span className='text-xl font-bold text-gray-900 dark:text-white'>Your Order is not Confirmed.</span><br/>
        <span className='text-xl font-bold text-gray-900 dark:text-white'>Connect CoodBook (...) for support </span>
    </div>
    
    <div className="items-center justify-center mt-5 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
   <Link to='/cart'  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue Shopping<i className='ml-2 bi bi-cart'></i></Link>
   </div>
   </div>
</section>
  )
}
