import React, { useState } from 'react'
import {CartCard} from './CartCard'
import { useCard } from '../../../contex'
import {Checkout} from './Checkout'
export const CartList = () => {
  const {CardList,total}=useCard();
  const [show,setShow]=useState(false)
 
  return (
    <section className='my-12'>
        <div className='flex flex-col'>
        <h1 className="text-2xl mt-12 font-bold text-center tracking-normal underline underline-offset-8 dark:text-white mb-8">My Cart ({CardList.length}) </h1>
       {CardList.map((product)=>(<CartCard key={product.id} product={product} />))}
       <div className='border border-gray-200 rounded-lg w-2/3 h-16 mx-auto flex justify-between items-center  mb-10  mt-5'>
        <span className='text-xl font-semibold dark:text-white ml-3 '>Total Amount :</span>
        
        <span className='text-xl font-semibold dark:text-white mx-8 '>$ {total}</span>
        
      </div>
      <div className='ml-auto mb-6 flex justify-center w-2/3 '>
      <button onClick={()=>setShow(!show)}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Place Order  <i className="bi bi-arrow-right text-md  dark:text-white"></i></button> 
      </div>
      </div>
       {show && <Checkout setShow={setShow} />}
    </section>
  )
}
