import React from 'react'

const SummaryQuestion = (props) => {
  const { title , icon , question , amount  , number} = props
  return (
    <>
      <h1 className='text-md font-bold text-darkGray tracking-tighter'>{title}</h1>
      <div className='flex gap-4 mt-4 items-center'>
        <div className='bg-pink text-white p-2 px-5 rounded-lg'>{number}</div>
        <p className='font-light text-gray-500 text-md'>{amount}</p>
      </div>
      <div className='mt-4 flex gap-3 items-center'>
        {icon}
        <p className='mb-0 text-lg font-bold text-darkGray cursor-pointer'>{question}</p>
      </div>
    </> 
  )
}

export default SummaryQuestion