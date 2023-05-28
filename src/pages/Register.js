import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../service';
import { useTitle } from '../Hooks/useTitle';

export const Register = () => { // ndirou hadi aprés ndirou fetch lel fichier bah tro7lou donnés li ktebnehm
  const navigate = useNavigate()
  useTitle("register page")
  const  handelRegister=async(event)=>{
    event.preventDefault();
    try{
      const authDetail={
        email:event.target.email.value,
        name:event.target.name.value,
        password:event.target.password.value,
      } 
    const data = await register(authDetail)
    data.accessToken ? navigate("/products") : toast.error(data); 
    // hadi toast pachage fi react ndirou bih notificatiion kima flash f back end

    }catch(error){
      toast.error(error.message)
    }
    
  }
  return (
    <main className=' min-h-screen mx-10 mt-20 '>
         <h1 className='text-2xl font-bold text-center tracking-normal underline underline-offset-8 dark:text-white mt-12 mb-8 '>Register</h1>
<form onSubmit={handelRegister}>
  <div className="mb-6  ">
    <label htmlFor="email" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="block shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
  </div>
  <div className="mb-6 ">
    <label htmlFor="name" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="name" className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div className="mb-6 ">
    <label htmlFor="password" className="flex justify-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
 
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

    </main>
  )
}
