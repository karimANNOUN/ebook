import React, { useEffect, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useCard } from '../../contex'
import { getUser, logout } from '../../service'
import { toast } from 'react-toastify';

export const DropDownLogedIn = ({setHidden}) => {
  const navigate = useNavigate()
  const [user,setUser]=useState({})
        const {clearCart}=useCard()
  useEffect(()=>{
    async function fetchData(){
      try{
        const data= await getUser()
      data.email ? setUser(data) : handelLogOut()
      }catch(error){
       toast.error(error.message)
      }
     
    }
    fetchData()
  })
   const handelLogOut=()=>{
    logout()
    setHidden(false)
    clearCart()
    navigate("/login")
    
   }
  return (
   
<div  id="dropdown" className={`z-10 absolute top-16  right-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

      <li>
        <Link to="#"  className=" flex justify-start  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{user.email}</Link>
      </li>
      <li>
        <Link to="/products" onClick={()=>setHidden(false)} className="flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Books</Link>
      </li>
      <li>
        <Link to="/dashbord" onClick={()=>setHidden(false)} className="flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DashBoard</Link>
      </li>
      <li>
        <span onClick={handelLogOut}  className="flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
      </li>
    </ul>
</div>


  )
}
