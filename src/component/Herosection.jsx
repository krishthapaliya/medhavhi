import React from 'react'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import playstore from '../assets/playstore.jpg'
import appstore from '../assets/appstore.jpg'
const Herosection = () => {
  return (
    <div className='flex  justify-center   pl-24 bg-slate-50 py-32'>
        <div className=' pr-10 w-1/2'>
            <h1 className='text-6xl mb-7 font-semibold   '>Ultimate School and Learning Management System</h1>
            <p className='text-lg font-sans mb-4'>Experience the power of Medhavhi, the all-in-one platform connecting students, teachers, schools, and parents, simplifying education, communication, and collaboration for a seamless learning experience.</p>
            <div className='flex gap-5 mb-4'>
              <button className='bg-[#27aaf1]  text-xl  rounded-md text-white p-2'>Get Started</button>
              <button className='bg-white shadow-2xl text-xl  rounded-xl  p-2'>Create School</button>
            </div>
            <div className='flex gap-5 text-center'>
                <p className='text-sm text-slate-800'>Also Available on:</p>
                <img src={appstore} className='w-6 h-6 bg-transparent' alt='applestore'/>
                <img className='w-6 h-6' src={playstore} alt='playstore'/>
            </div>
        </div>
        <div className="w-1/2 flex justify-end gap-5 ">
        <img src={image1} alt='applestore'className=' w-[193px] h-[408px]'/>
        <img src={image2} alt='playstore' className='w-[450px] h-[408]'/>
        </div>
    </div>
  )
}

export default Herosection