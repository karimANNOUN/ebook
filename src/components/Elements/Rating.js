import React from 'react'

export const Rating = ({rating}) => {
    let starArray= Array(5).fill(false)
    for (let i = 0; i < rating ; i++) {
         starArray[i]=true;
   
    }
  return (
    <>
    {starArray.map((value,index)=>(
     value ? (<i key={index} className='text-lg bi bi-star-fill text-yellow-500 mr-1' ></i>) : (<i key={index} className='text-lg bi bi-star text-yellow-500 mr-1' ></i>)
    ))}
    </>
  
    )
}
