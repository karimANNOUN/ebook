import { ProductCard } from "../../components"
import { FilterBar } from "./components/FilterBar"
import { useState,useEffect } from "react"
import { useLocation } from 'react-router-dom'
import { useTitle } from "../../Hooks/useTitle"
import { useFilter } from "../../contex"
import { getProductList } from "../../service"

import { toast } from "react-toastify"


export const ProductList = () => {
  const [show , setShow]=useState(false)
 

  const {products,initialProductList}=useFilter() // hadou 3aytnelhm bah npasiw fihm data ti3na nes7a9oha bah nfiltriw mnha wch nhebou
  const search = useLocation().search; // kifkif tjbdlna wch ktebna f search  m3aha q adika q_react 
  const searchTerm = new URLSearchParams(search).get("q"); // hadi dernaha bah njbdou exact wch ktebna f search 
  useTitle("List")

    
   
    useEffect(()=>{
      async function fetchProducts (){
         try{
          const data = await getProductList(searchTerm)
          initialProductList(data) ;//hna pasina data bah nakhdmou baha f use context
         }catch(error){
         toast.error(error.message)
         }
        
      }
      fetchProducts()  
    },[searchTerm])//eslint-disable-line
  return (
    <main className="min-h-screen">
      <section className='py-7' >
           <p className='text-3xl text-gray-700 dark:text-white'> {products.length === 0 ? `Not Found for "${searchTerm}"`: ""} </p>
     </section>

      <section>
        <div className="flex flex-row justify-around items-center  p-4">
         <span className="text-2xl font-semibold items-center dark:text-slate-100 " >All products ({products.length}) </span>
         <div>
         <label className="relative inline-flex items-center cursor-pointer">
          <i onClick={()=>setShow(!show)} className="bi bi-filter-right text-4xl font-semibold dark:text-white"></i>
         
         
        </label>
         </div>
        </div>
       
        <div className="flex flex-wrap justify-center mt-8 mb-12 mx-5">
        {products.map((product)=>(
         
         <ProductCard key={product.id} product={product} />
        ))}
        
       
        
       
        </div>
      </section>
      <div>
        {show && <FilterBar setShow={setShow}/>}
      
      </div>
      
    </main>
  )
}
