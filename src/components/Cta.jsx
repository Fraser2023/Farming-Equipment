import React from 'react'
import {FiPhoneCall} from "react-icons/fi"
import {BsArrowRightCircle} from "react-icons/bs"
const Cta = () => {
  return (
    <div className='bg-[#179d38] '>
    <div className="flex items-center cta py-4 w-11/12 m-auto justify-between">
    <div className="my-4 md:my-hidden">
        <span className="lg:text-4xl" >We Help Industry To Utilize The
        </span>
        <br />
        <span className="lg:text-4xl" >Heavy Equipment Work Better</span>
    </div>
    <div className="flex items-center md:border-l-2 md:border-black">
    {/* <div className="border-l-2 h-4  border-black" /> */}
        <FiPhoneCall className='mr-4 ml-4' size={25}/>
        <div className="my-4 md:my-hidden">
            <span className="lg:text-4xl" >Get Quick Support
            </span>
            <br />
            <span className="lg:text-4xl" >+254717255460</span>
        </div>
    </div>
    <div className="my-4 md:my-hidden">
        <button className='bg-[#F26E21]  text-white text-lg rounded-md font-bold py-2 px-4'>
            <div className="flex items-center">
                <span className="lg:text-4xl" >Contact Us</span>
                <BsArrowRightCircle className='ml-2'/>
            </div>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Cta