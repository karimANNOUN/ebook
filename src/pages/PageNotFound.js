import React from 'react'
import notfound from '../assets/notfound.jpg'
import { Link } from 'react-router-dom'
import { useTitle } from '../Hooks/useTitle'

export const PageNotFound = () => {
  useTitle("Page Not Found")

  return (
    <main className='min-h-screen'>
      <section className='flex flex-col  justify-center px-2'>
        <div className='flex flex-col  items-center my-4'>
        <p className={ 'my-6 text-7xl text-gray-700 font-bold dark:text-white'}> oops! </p>
         
         <div className='max-w-lg'>
         <img className='rounded' src={notfound} alt=' 404 !! NotFound'/>
         </div>

        </div>

        <div className='flex justify-center my-4 '>
         <Link to="/">
         <span className='text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' >Back to Home</span>
         
         </Link>
        </div>
      </section>
    </main>
  )
}
