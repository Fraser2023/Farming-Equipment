import React from 'react'
import {BsSearch} from "react-icons/bs"
const HomePage = () => {
  const HandleSearch=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='bg-green-100 py-32 h-[calc(100vh-7rem)]'>
      <div className="text-center">
      <h1 className='font-bold sm:text-md md:text-md lg:text-4xl uppercase md:w-[70%] m-auto pb-16 '>Your One-Stop Source For All Equipment Rental Needs</h1>
      <div className="bg-white p-4 md:w-[60%]  md:m-auto rounded-md sm:mx-4 w-[90%] m-auto ">
        <form onSubmit={HandleSearch} className='flex justify-evenly'>
          <input type="text" placeholder='Search for Something..........' className='w-full md:px-0 px-4 outline-none border-r-2 md:mr-4 border-gray-950' />
          <button >
          <div className="flex items-center">
          <BsSearch className='ml-4'/>
          <div className='font-bold ml-4 md:mr-16' >Search</div>
          </div>
          </button>
        </form>
      </div>
        <h1 className='pt-16 md:w-[70%] m-auto font-bold text-xl'>Top-Of-The-Line Equipment Ready At Flexible Rates Around</h1>
      </div>
    </div>
  )
}

export default HomePage