import React from 'react'
import {AiOutlineShareAlt} from "react-icons/ai"
import {AiOutlinePrinter} from "react-icons/ai"
import {HiOutlineDuplicate} from 'react-icons/hi'

const SummaryAction = () => {
  return (
    <div className='mt-12'>
      <h1 className='text-darkGray font-bold'>Actions</h1>
      <div className='flex gap-2 items-center flex-wrap'>
        <div className='flex gap-3 items-center mt-4 bg-pureLight w-[48%] p-3 px-4 rounded-xl justify-center cursor-pointer'>
          <AiOutlineShareAlt fontSize="20" color="#5a5bb5"/>
          <p className='text-lg'>Share test</p>
        </div>
        <div className='flex gap-3 items-center mt-4 bg-pureLight w-[48%] p-3 px-4 rounded-xl justify-center cursor-pointer'>
          <AiOutlinePrinter fontSize="20" color="#5a5bb5"/>
          <p className='text-lg'>Print test</p>
        </div>
        <div className='flex gap-3 items-center mt-4 bg-pureLight w-[48%] p-3 px-4 rounded-xl justify-center cursor-pointer'>
          <HiOutlineDuplicate fontSize="20" color="#5a5bb5"/>
          <p className='text-lg'>Duplicate</p>
        </div>
      </div>

      <div className='mt-12'>
        <button className='bg-primary text-white w-full p-3 rounded-lg text-lg hover:bg-blue-800' aria-label='save changes'>Save Changes</button>
      </div>
    </div>
  )
}

export default SummaryAction