import React, { useRef , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchResult } from './SearchResult';
import { getSearch } from '../../service';
import { useTitle } from '../../Hooks/useTitle';
import { toast } from 'react-toastify';

export const Search = ({setShow}) => { 
const [input , setInput]=useState("")
const [products,setProducts]=useState([])
const [like,setLike] = useState(false)
const navigate = useNavigate();

  const searchRef=useRef();
  useTitle("Search")

      async function fetchProduct (value){
        try{
         const data= await getSearch()
         const result = data.filter((curent)=>{
           return (value && curent && curent.name  && curent.name.toLowerCase().includes(value)) || (value && curent && curent.name  && curent.name.toUpperCase().includes(value)) || (value && curent && curent.name  && curent.name.includes(value))
         })     
         setProducts(result)
        }catch(error){
          toast.error(error.message)
         }
       }
  
    const handelchange = (value)=>{
      setInput(value)
      fetchProduct(value)
   }
  
   
 
  const handelSubmit=(event)=>{
    event.preventDefault()
    setShow(false)
    return navigate(`/products?q=${searchRef.current.value}`);
  }
  return (
    <main>
      
     <section>
     <form onSubmit={handelSubmit} >   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative w-2/3 mx-auto mt-8 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input ref={searchRef} value={input} onChange={(e)=>handelchange(e.target.value)} onClick={()=> setLike(false)}  type="search" name='search'  id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="find your book ..." autoComplete="off" required/>
        <button type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    { <SearchResult products={products} like={like} setLike={setLike}  />}
</form>
    
     </section>
     
    </main>
    


  )
}
