import React from 'react'
import Logo from '../../images/logo.webp'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Search } from '../Section/Search'
import { DropDownLogedIn ,DropDownLoggedOut } from '../index'
import { useCard } from '../../contex'

export const Header = () => {
  const {CardList} = useCard()
const [hidden ,setHidden]=useState(false);
const [show,setShow]=useState(false)
const Token = JSON.parse(sessionStorage.getItem("token")) // hadi dernaha bah n3aytou ida ana msejlin w dakhlin b user ou nn 

  const [darkMode,setDarkMode]=useState( JSON.parse(localStorage.getItem("darkMode")) || false);
  useEffect(()=>{
   localStorage.setItem("darkMode",JSON.stringify(darkMode))
 
   if (darkMode) {
     document.documentElement.classList.add('dark')
   } else {
     document.documentElement.classList.remove('dark')
   }
 
  },[darkMode])

  


  return (
    <header >
      
<nav className="bg-white border-b-2 border-gray-200  dark:border-gray-700 dark:bg-gray-900 ">
    <div className="flex flex-row justify-between items-center  max-w-screen-4xl p-4">
      <div  >
      <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3 rounded-full" alt="Ebookcommerce Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ebook</span>
        </Link>
      </div>
      <div className='flex flex-row ml-0'>

      <span onClick={()=>setDarkMode(!darkMode)} className="bi bi-lightbulb cursor-pointer text-xl mr-5 dark:text-white"></span>

       <span onClick={()=>setShow(!show)} className="bi bi-search cursor-pointer text-xl mr-5 dark:text-white"></span> 
        
        <Link to="/cart"  className="bi bi-cart4 cursor-pointer text-xl mr-5 dark:text-white"><span className='text-white text-sm absolute top-3.5 right-16  bg-rose-500 px-1 rounded-full'>{CardList.length}</span></Link>

        <span onClick={()=> setHidden(!hidden)} className="bi bi-person-circle cursor-pointer text-xl mr-5 dark:text-white "></span>
        {hidden && (Token ? <DropDownLogedIn setHidden={setHidden} /> :<DropDownLoggedOut setHidden={setHidden} />) } 
        
     
      </div>
       
        
    </div>
</nav>
 

{ show && <Search setShow={setShow} /> }



    </header>
  )
}
