import React from 'react'
import bgimage from "../assets/bgimage.png"
const AboutEtgina = () => {
  return (
    <div className='w-11/12 m-auto py-8'>
      <div className="bg_image">
        <div className="md:flex">
        <div className="images">
          <img src={bgimage} alt="" />
        </div>
        <div className="text-center">
          <h1 className='text-xl text-center py-4'>About E-tinga Equipments Rental</h1>
          <h1 className='text-xl text-center lg:font-bold lg:text-4xl md:w-[75%] m-auto '>
            We Offer Smarter & More
            Affordable Access To Rent
            Farm Equipment</h1>
            <div className="py-4">
              <div className='border-b-4 border-yellow-600 my-2 w-[30%] m-auto'></div>
              <div className='border-b-4 border-yellow-600 my-2 w-[20%] m-auto'></div>
              <div className='border-b-4 border-yellow-600 my-2 w-[10%] m-auto'></div>
            </div>
            <p className='md:w-[75%] m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam adipisci saepe fugit ipsam. Atque minima excepturi ipsa officiis? Repellendus, labore.
            </p>
            {/* large screen */}
            <div className="py-8 md:hidden lg:inline-block">
              <div className="md:flex pt-4 w-[75%] m-auto ">
                <h1 className='md:border-r-2 font-bold md:border-gray-600 mr-4 px-4'>The Facilities less expensive</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.</span>
              </div>
              <div className="md:flex pt-4 w-[75%] m-auto">
                <h1 className='md:border-r-2 font-bold md:border-gray-600 mr-4 px-4'>Innovating
                  The Heavy Fleets</h1>
                  <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!</span>
              </div>
            </div>
        </div>
        </div>
        {/* medium screen */}
        <div className="py-8 mobile_screen lg:hidden  ">
              <div className="md:flex pt-4 w-[95%] m-auto ">
                <h1 className='md:border-r-2 font-bold md:border-gray-600 mr-4 px-4'>The Facilities less expensive</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus.</span>
              </div>
              <div className="md:flex pt-4 w-[95%] m-auto">
                <h1 className='md:border-r-2 font-bold md:border-gray-600 mr-4 px-4'>Innovating
                  The Heavy Fleets</h1>
                  <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat!</span>
              </div>
            </div>
      </div>
    </div>
  )
}

export default AboutEtgina