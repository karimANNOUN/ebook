import React from 'react'
import { Link } from 'react-router-dom'
export const DashbordEmpty = () => {
  return (
    
        
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div><i className="bi bi-cart-plus cursor-pointer text-7xl text-green-700  dark:text-green-500 " ></i></div>
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">oops your order Dashboerd is empty !</h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">add ebooks from to your store collection.</p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Link to='/products'  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue Shopping<i className='ml-2 bi bi-cart'></i></Link>
        </div>
    </div>
    
        
  )
}
