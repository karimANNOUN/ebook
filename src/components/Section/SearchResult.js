import React from 'react'
import {SerachList} from './SerachList'





export const SearchResult = ({products, like , setLike}) => {
  return (
    <div className='dark:text-white max-h-64 overflow-y-auto flex justify-start mx-auto text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 w-2/3 '>
        <ul>
           {!like && products.map((product)=> (<SerachList key={product.id} product={product} setLike={setLike} />) ) }
            
        </ul>
    </div>
  )
}
