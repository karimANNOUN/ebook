import React from 'react'
import { EmptyCart } from './components/EmptyCart';
import {CartList} from './components/CartList'
import { useCard } from '../../contex';
import { useTitle } from '../../Hooks/useTitle';
export const CartPage = () => {
  const { CardList} = useCard()
    const cartLength =  CardList.length;
    useTitle(`Cart (${cartLength})`)
  return (
    <main className='min-h-screen'>
       
        
        {cartLength ===0 ? <EmptyCart/> : <CartList/> }
        
       
    </main>
  )
}
