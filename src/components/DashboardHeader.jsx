import React from 'react'
import { BsChevronDown } from "react-icons/bs"

const DashboardHeader = () => {
  return (
    <div className='mt-10'>
        <div className='flex justify-between items-center '>
            <h1 className='text-5xl leading-tight text-darkGray font-bold'>Test information</h1>
            <div className='flex gap-12 items-center bg-pureLight p-3 px-4 rounded-lg cursor-pointer'>
                <div className='w-[13px] h-[13px] bg-green rounded-full'></div>
                <p className='text-lg font-bold'>Active</p>
                <BsChevronDown/>
            </div>
        </div>
        <div className='mt-12'>
            <h1 className='text-darkGray text-lg mb-6 font-bold'>Test name</h1>
            <div className='p-3 rounded-md px-4 bg-pureLight'>
                <p className='text-gray-500 font-light'>Elementary School - Biology semester 1</p>
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader