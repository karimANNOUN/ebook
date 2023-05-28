import React from 'react'
import hero from '../../../images/write1.jpg'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className='flex flex-col min-w-[85%] mx-auto mb-10 justify-items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      
        <div className='flex flex-col justify-start mx-5 my-3 '>
         <h1 className='my-10 text-5xl  font-bold dark:text-white'>The Ultimate eBook Store </h1>
         <p className=' text-2xl font-medium font-sans dark:text-white '>e-book, in full electronic book, digital file containing a body of text and images suitable for distributing electronically and displaying on-screen in a manner similar to a printed book.</p>
         <div className='mt-5'> <Link to='/products' type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Explore eBooks</Link></div>
        </div>
        <div className='flex visual my-5 min-w-[40%] min-h-full' >
        <img src={hero} alt='hero book writing' className=' rounded-lg max-h-full' />

        </div>
        
    </section>
  )
}

