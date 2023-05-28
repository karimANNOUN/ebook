import React, { useEffect, useState } from 'react'

import { useCard } from '../../../contex'
import { useNavigate } from 'react-router-dom';
import { getUser , createOrder } from '../../../service';
import { toast } from "react-toastify"


export const Checkout = ({setShow}) => {
  const navigate=useNavigate();
  const {CardList,total , clearCart}=useCard() ;
  const [user,setUser]=useState({})
  

  useEffect(()=>{
     // hadi methode kamla bah ki user ti3na yheb ychri haja yji esmou houwa brk fl checkout
    async function fetchData(){
      try{
        const data = await getUser()
      setUser(data)
      }catch(error){
       toast.error(error.message)
      }
     
    }
    fetchData();
  },[])
 
async function handelSubmit (event){
  event.preventDefault();

  
  try{
  const data = await createOrder(CardList,total,user)
  clearCart()
  navigate("/order",{state:{data:data , status:true}})

  }catch(error){
    navigate("/order",{state:{status:false}})
    toast.error(error.message)
  }
  

}




  return (
    <section>
        
<form onSubmit={handelSubmit} className="max-w-xl mx-auto mt-10 flex justify-center items-center absolute left-[10%] top-[10%] right-[10%] ">
  
   

    <div className="bg-white shadow-md rounded-lg px-8 py-6 dark:bg-slate-600 dark:text-white ">
      <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Payment Details</h2>
      <div>
      <button onClick={()=>setShow(false)}  type="button" data-drawer-hide="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900  text-sm p-1.5 relative top-1 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
      </div>
      </div>
      <div className="mb-6">
        <label htmlFor="card-number" className=" flex justify-start text-gray-700 text-sm font-bold mb-2  dark:text-white">Card Number</label>
        <input type="text" id="card-number"  className="w-full  border border-gray-300 rounded py-2 px-3 dark:bg-slate-600 dark:text-white"/>
      </div>
      <div className="flex mb-6">
        <div className="w-1/2 mr-2">
          <label htmlFor="expiry-date" className="flex justify-start text-gray-700 text-sm font-bold mb-2  dark:text-white">Expiry Date</label>
          <input type="text" id="expiry-date"   className="w-full border border-gray-300 rounded py-2 px-3 dark:bg-slate-600 dark:text-white"/>
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="cvv" className="flex justify-start text-gray-700 text-sm font-bold mb-2  dark:text-white">CVV</label>
          <input type="text" id="cvv"  className="w-full border border-gray-300 rounded py-2 px-3 dark:bg-slate-600 dark:text-white" />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="name"   className="flex justify-start text-gray-700 text-sm font-bold mb-2  dark:text-white">Name</label>
        <input type="text" id="name" name="name"  value={user.name || ""}  className="w-full border border-gray-300 rounded py-2 px-3 dark:bg-slate-600 dark:text-white" disabled required=""/>
      </div>
      <div className="mb-6">
        <label htmlFor="email"   className="flex justify-start text-gray-700 text-sm font-bold mb-2  dark:text-white">Email</label>
        <input type="email" id="email" name="email" value={user.email || ""}  className="w-full border border-gray-300 rounded py-2 px-3 dark:bg-slate-600 dark:text-white" disabled required="" />
      </div>
      <div className='my-10'>
      <span className='text-2xl font-semibold dark:text-green-500' >$ {total}</span>
    </div >

      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay Now
        </button>
        <span className="text-gray-400 text-sm  dark:text-white">Secure Payment</span>
      </div>
    </div>
  
   
</form>



</section>
  )
}
