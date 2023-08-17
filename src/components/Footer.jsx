import React from 'react'
import Cta from './Cta'

const Footer = () => {
  return (
    <div>
    <Cta/>
    <div className="bg-[#111111] text-white py-8">
    {/* form */}
    <div className="md:flex p-4 items-center md:justify-center">
    <div className="lg:border-l-2 border-white text-center">
      <span className='mx-8 md:text-2xl sm:text-center'>Newsletter Subscription
    </span>
      <br />
      <span className='mx-8 md:text-2xl sm:text-center'>Get Latest Deals from E-tinga</span>
    </div>
    
    {/* footer links */}
    <div className="mt-8 md:mt-0">
      <form >
        <div className="flex items-center ">
          <input type="email" className='mr-4 py-2 px-4 outline-none border-2 border-white bg-transparent' placeholder='Enter Email......' />
          <button type='submit' className='uppercase bg-[#025002] py-2 px-4 '>Subscribe</button>
        </div>
      </form>
    </div>
    </div>
    <div className="border-b-[1px] border-white w-9/12 m-auto py-4 "></div>
    {/* copy right */}
    <div className="flex  justify-evenly py-8">
    <div className="">
      <span className='uppercase font-bold'>About E-tinga </span>
      <div className='border-b-2 border-yellow-700 ml-3 my-4 w-[100px] '></div>
      <div className='border-b-2 border-yellow-700 ml-10 my-4 w-[50px] '></div>
      <div className='border-b-2 border-yellow-700 ml-14 my-4 w-[25px] '></div>
    </div>
    <div className="">
      <span className='uppercase font-bold'>Useful Links</span>
    </div>
    
    </div>
    <div className="md:flex md:justify-evenly px-8 md:px-0">
      <div className="mb-4">
        <span>TingA is a project of Quipbank Trust </span><br />
        <span>Limited that employs modern </span><br />
        <span>technology channels to allow farmers </span><br />
        <span>access farm mechanization.</span>
      </div>
      <div className="my-8 md:my-0">
        <ul>
          <li>About E-tinga</li>
          <li>Equipment List</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
    <div className="text-center">
      <small>&copy;2022 - {new Date().getFullYear()  } <span className='text-green-700'>E-tinga</span>  - Renting Farm Equipments. Terms & Conditions</small>
    </div>
    </div>
  </div>
  )
}

export default Footer