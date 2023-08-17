//import React from 'react'
import {BsArrowRightCircle} from "react-icons/bs"
const SearchBar = () => {
  return (
    <div className="lg:w-10/12 md:w-11/12  m-auto md:px-2  ">
    <div className='bg-[#025002] p-4 md:mt-[-60px]'>
      <h1 className="text-center text-white font-bond text-2xl py-4 uppercase">Find The Right Equipment</h1>
      <form >
      <div className="pb-4 searchbar  lg:px-32 flex items-center justify-around gap-4">
      <input type="text"  placeholder='Equipment Name......' className='inputbar px-4 py-2 outline-none rounded-md'/>
        <input type="text" placeholder='Rental Duration Date........'  className='inputbar py-2 px-4 outline-none'/>
        <button type='submit' className='bg-black inputbar text-white p-2  text-center rounded-md'>
      
        <div className="flex items-center text-center m-auto buttontext">
        <div className='uppercase font-bold md:text-xs '>fIND Equipment</div>
        <BsArrowRightCircle className='ml-4 md:ml-2' size={20}/>
        </div>
        </button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default SearchBar