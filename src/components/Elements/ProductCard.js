import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'
import { useCard } from '../../contex'
import { useState,useEffect } from 'react'

export const ProductCard = ({product}) => {
    const [ isinTheCard ,setIsInTheCard]=useState(false);
    const {CardList,addToCart,removeFromCart} = useCard()
    function handelAdd() {
        addToCart(product)
          
    }
    


    useEffect(()=>{
        const isInCart= CardList.find(cartItem=> cartItem.id === product.id)
        if (isInCart) {
            setIsInTheCard(true)
        }else{
            setIsInTheCard(false)
        }
    } ,[CardList ,product.id]) // drnaha f dependencie pasque lezm yjralha update pâge ti3na    
    
  return (
   
<div className=" h-md  w-full  max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/products/${product.id}`}>
        <img className=" p-8 h-[68%] w-full rounded-t-lg" src={product.Poster} alt="productimage" />
    </Link>
    <div className="px-3 pb-3">
        <Link to={`/products/${product.id}`} >
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </Link>
        <p className='font-normal text-gray-700 dark:text-gray-200'>{product.long_description}</p>
        <div className="flex items-center mt-3">
            <Rating rating={product.Rating} />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.Rating} </span>
        </div>
        <div className="flex items-center justify-between mt-3 ">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.Price} </span>
           {isinTheCard ?  <button  onClick={()=>removeFromCart(product)} disabled={product.in_stock ?"":"disabled"} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove <i className="bi bi-trash"></i></button> :  <button  onClick={handelAdd} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={product.in_stock ?"":"disabled"}>{product.in_stock ?"Add To Cart":"Out Of Stock"}<i className='ml-2 bi bi-cart'></i></button> }
        </div>
    </div>
</div>

  )
}
