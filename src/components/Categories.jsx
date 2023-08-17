import React from 'react'
import { categories } from './databqse'
const Categories = () => {
  return (
    <div className='w-11/12 m-auto mt-8'>
    <p className='text-center uppercase text-sm'>We Promise To Find You The Right Equipment</p>
    <h1 className='text-center md:text-lg lg:text-2xl xl:text-4xl text-gray-400 ga sm:text-sm uppercase  py-8'>Browse Machinery Categories</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-8">
      {
        categories.map((x)=>(
          <div key={x._id} className="bg-[#C4C4C4] p-2 rounded-md overflow-hidden">
        <div className="card-info">
          <img src={x.image} alt="card_category" className='h-[250px] w-full' />
          <div className="">
            <h1 className='uppercase font-bold text-center py-2'> {x.category} </h1>
          </div>
        </div>
      </div>
        ))
      }
    </div>
    </div>
  )
}

export default Categories