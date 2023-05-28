import React from 'react'
import { OrderSuccess } from './components/OrderSuccess';
import { OrderFailed } from './components/OrderFailed';
import { useLocation } from 'react-router-dom';


export const OrderPage = () => {
 
    const {state} =useLocation();
  return (
    <main className='min-h-screen'>
        {state.status ?<OrderSuccess data={state.data} />:<OrderFailed/> }
    </main>
  )
}
