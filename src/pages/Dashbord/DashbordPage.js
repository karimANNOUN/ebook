import React, { useState } from 'react'
import { DashbordCard } from './components/DashbordCard'
import { DashbordEmpty } from './components/DashbordEmpty'
import { useEffect} from 'react'
import { getUserOrders } from '../../service'
import { useTitle } from '../../Hooks/useTitle';
import { toast } from "react-toastify"

export const DashbordPage = () => {
  const [orders,setOrders]=useState([])
  useTitle("Dashboard ")
  const Token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  
  useEffect(()=>{
    // hadi methode kamla bah ki user ti3na yheb ychri haja yji esmou houwa brk fl checkout
   async function getOrders(){
     try{
      const data = await getUserOrders()

     setOrders(data)

     }catch(error){
      toast.error(error.message)
     }
     
   }
   getOrders();
 },[])
 
  return (
    <main className='min-h-screen'>

        <section>
        <h1 className="text-2xl font-bold my-10 text-center tracking-normal underline underline-offset-8 dark:text-white mb-8">Dashbord</h1>
        </section>
        <section >
            {orders.length > 0 && orders.map((order)=>(
                <DashbordCard key={order.id} order={order} />
            )) }
        </section>

       <section className='w-1/2 h-3/5 mx-auto mt-32 '>
       {orders.length === 0 && <DashbordEmpty/>}
       </section>
            
        

    </main>
  )
}
