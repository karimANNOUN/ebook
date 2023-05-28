import {ProductCard} from '../../../components'
import { useState ,useEffect} from 'react'
import { getFeatures } from '../../../service';
import { toast } from "react-toastify"

export const FeatureProducts = () => {
 
    const [products,setProducts]=useState([]);

   
   
    useEffect(()=>{
      async function fetchProducts (){
       try{
        const data = await getFeatures()
        setProducts(data) 
       }catch(error){
        toast.error(error.message)
       }
       
        
      }
      fetchProducts()  
    },[])

  return (
   <section>
   
   <h1 className="text-2xl font-bold text-center tracking-normal underline underline-offset-8 dark:text-white mb-8">Features eBooks</h1>

    <div className="flex flex-wrap justify-center lg:flex-row">
      {products.map((product)=>(
       <ProductCard key={product.id} product={product} />
      ))}
       
    </div>
   </section>
  )
}
