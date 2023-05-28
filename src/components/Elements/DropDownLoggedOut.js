import React from 'react'
import { Link } from 'react-router-dom'
export const DropDownLoggedOut = ({setHidden}) => {
  return (
    <div  id="dropdown" className={`z-10 absolute top-16  right-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link to="/products" onClick={()=>setHidden(false)} className="flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Books</Link>
      </li>
      <li>
        <Link to="/login" onClick={()=>setHidden(false)} className="flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
      </li>
      <li>
        <Link to="/register" onClick={()=>setHidden(false)} className="flex justify-start px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
      </li>
    </ul>
</div>

  )
}
