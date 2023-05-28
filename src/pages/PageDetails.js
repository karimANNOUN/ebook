import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify"
import { Rating } from '../components/Elements/Rating';
import { useTitle } from '../Hooks/useTitle';
import { useCard } from '../contex';
import { getProduct } from '../service';



export const PageDetails = () => {
  const params=useParams();
  const [product,setProduct]=useState({});
  useTitle("Details")
 
  useEffect(()=>{
   async function fetchProduct() {
    try{
      const JSON = await getProduct(params)
     setProduct(JSON);
     
    }catch(error){
      toast.error(error.message)
    }
     
    
   }
   fetchProduct()
  },[params])





  const {CardList,addToCart,removeFromCart} = useCard();
  const [ isinTheCard ,setIsInTheCard]=useState(false);

    function handelAdd() {
        addToCart(product)
        console.log(CardList)   
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
    <main className='min-h-screen'>
      <section className='flex flex-wrap justify-center p-20 my-auto '>

      <div className='max-w-sm mr-6 '>
       <img className='rounded h-[100%]' src={product.Poster} alt={product.name}/>
      </div>


      <div className='max-w-2xl text-gray-700 text-lg dark:text-white ml-0'>
       <h2 className='text-4xl font-bold my-3 text-center lg:text-left'>{product.name} </h2>
       <p className='my-4'>{product.overview} </p>

       <p className='my-4 flex justify-start'>
      <span className='mr-2 font-bold'>$ {product.Price} </span>
      </p>
      <div className="flex  mt-2.5 ">
            <Rating rating={product.Rating} />
            </div>
        <div className='flex flex-row justify-start' >
        {product.best_seller ? <span className='font-semibold text-yellow-600 border bg-slate-100 rounded-lg  px-3 py-1 my-2 mr-3 ' >BEST SELLER</span> : ""}
        {product.in_stock ? <span className='font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-3 my-2' >INSTOCK</span> : <span className='font-semibold text-red-600 border bg-slate-100 rounded-lg px-3 mr-3 py-1 my-2' >OUT OF STOCK</span> }
        <span className='font-semibold text-blue-600 border bg-slate-100 rounded-lg px-3 py-1 mr-3 my-2' >{product.Size} MB</span>
       
       </div>
       <div className='flex justify-start'>
       {isinTheCard ?  <button  onClick={()=>removeFromCart(product)} disabled={product.in_stock ?"":"disabled"} className="text-white bg-red-700 mt-3 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove <i className="bi bi-trash"></i></button> :  <button  onClick={handelAdd} className="text-white bg-blue-700 mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={product.in_stock ?"":"disabled"} >{product.in_stock ?"Add To Cart":"Out Of Stock"}<i className='ml-2 bi bi-cart'></i></button> } 
       </div>
       
    </div>
    </section>
    </main>
  )
}
