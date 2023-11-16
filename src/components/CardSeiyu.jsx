import React from 'react'
import { Link } from 'react-router-dom'

const CardSeiyu = ({all}) => {
  return (
  <div className='bg-black rounded-lg m-3 font-kenia text-white hover:text-black hover:bg-gray-400'>
    <Link to={`/seiyu/${all.mal_id}`}>
    <div className='cursor-pointer p-0.5 hover:p-0 flex justify-center items-center'>
    <img
    className='rounded-t-lg w-full h-20 sm:h-40 lg:h-72'
    src={all.images.jpg.image_url} 
    alt='top anime'/>
    </div>
    <h1 className='cursor-pointer text-center'>{all.name}</h1>
    </Link>
  </div>
  )
}

export default CardSeiyu




