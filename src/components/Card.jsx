import React from 'react'

const Card = ({all}) => {
  return (
  <div className='bg-black rounded-lg m-3'>
    <div className='cursor-pointer p-1 flex justify-center items-center'>
    <img
    className='rounded-t-lg w-full h-20 sm:h-40 lg:h-72 '
    src={all.images.jpg.image_url} 
    alt='top anime'/>
    </div>
    <h1 className='text-center font-kenia text-white hover:text-blue-700'>{all.title}</h1>
  </div>

  )
}

export default Card