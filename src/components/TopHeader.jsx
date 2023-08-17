import React from 'react'
import {BsFillArrowRightCircleFill,BsFacebook} from "react-icons/bs"
import {BiTime} from "react-icons/bi"
import {AiFillTwitterCircle,AiFillYoutube,AiFillLinkedin} from "react-icons/ai"
const TopHeader = () => {
  return (
    <div className='bg-[#222222] md:block py-2 h-12 mobile_screen'>
   <div className="flex w-11/12 m-auto justify-between items-center">
   <div className="flex items-center">
   <BsFillArrowRightCircleFill className='icon_color mr-2'size={20}/>
   <span className='md:text-[12px] lg:text-lg  text-white lg:font-bold'>Latest Updates Get latest updates by subscribing to our newsletter1</span>
   </div>
   <div className="flex items-center">
    <div className="flex items-center">
      <BiTime className='icon_color mr-2' size={25}/>
      <span className='md:text-[12px] lg:text-lg text-white lg:font-bold'>Mon-Sat 9.00-18.00</span>
    </div>
    <div className="border h-8 mx-4"></div>
    <div className="flex items-center">
     <a href="" target='blank'>
     <BsFacebook color="white" className='mx-1'/>
     </a>
     <a href="" target='blank'>
     <AiFillTwitterCircle color="white" className='mx-1'/>
     </a>
     <a href="" target='blank'><AiFillLinkedin color="white" className='mx-1'/></a>
     <a href="" target='blank'>   <AiFillYoutube color="white" className='mx-1'/></a>
     
    </div>
   </div>
   </div>
   </div>
  )
}

export default TopHeader