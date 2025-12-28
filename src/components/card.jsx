import React from 'react'

const Card = (props) => {
  return (
    <div className='w-2xs flex flex-col p-6 justify-center items-center hover:scale-103 hover:bg-gray-500 bg-gray-600 rounded-2xl shadow-2xl gap-7 h-150 pt-2'>
        <img className=' w-40 h-40' src={props.img} alt="img" />
      <h1 className='text-xl font-bold'>{props.title}</h1>
      <p className='text-[12px]'>{props.des}</p>
      <h2 className='bg-sky-500 hover:scale-150 shadow-black cursor-pointer w-fit px-5 pt-2  rounded-2xl pb-2'>{props.price}</h2>
    </div>
  )
}

export default Card
