import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../service';
import { useTitle } from '../Hooks/useTitle';

export const Login = () => {
  const navigate =useNavigate()
  const email = useRef();
    const password = useRef();

    useTitle("Login page")
  async function handelLogin (event){
    
    event.preventDefault();
    try{
      const authDetail={
        email:email.current.value,
        password:password.current.value,
      } 
   
  
    const data= await login(authDetail)
    data.accessToken ? navigate("/products") :toast.error(data);  
  
    }catch(error){
      toast.error(error.message)
    }
  
  }

  async function handelLoginGuess(){ // hadi dernaha 7na medina email w pass word ya9dr yjareb bih ay  we7ed website ti3na bla maydir compte
    try{
      email.current.value="123k@gmail.com";
    password.current.value="123k";

    const data= await login({email:email.current.value ,password:password.current.value})
    data.accessToken ? navigate("/products") :toast.error(data)
    }catch(error){
      toast.error(error.message)
    }
  }
 
 
  return (
  
    <main className='min-h-screen mx-10 mt-20'>
        <h1 className='text-2xl font-bold text-center tracking-normal underline underline-offset-8 dark:text-white mt-12 mb-8 '>Login</h1>
      <form onSubmit={handelLogin}>
  <div className="mb-6 ">
    <label htmlFor="email" className=" mb-2 flex justify-start text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className=" mb-2 flex justify-start text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  
  <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button> <br/>
  
  <Link to="/register" type="submit" className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Account</Link> 
</form>
<button onClick={()=>handelLoginGuess()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login Guess</button> <br/>
    </main>    


  
  )
}
