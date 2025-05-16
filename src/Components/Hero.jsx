import React from 'react'
import image from '../assets/Images/student-1.jpg';


const Hero = () => {
  return (
    <div className=' h-screen pt-14 w-full bg-gradient-to-t from-[#f0f4f8] to-[#95a8dd] flex md:items-center  justify-center overflow-hidden'>  

        <div className='flex w-[90vw] h-[60vw] md:w-[80vw] md:h-[30vw] mt-20  items-center justify-around  shadow-xl      rounded-lg  bg-white'>

           <div className='h-[30vw] w-[60vw]  flex flex-col items-center justify-center'>
            
              <h1 className='sm:text-3xl md:text-2xl  lg:text-4xl xl:text-5xl font-bold text-center'>Welcome to Our <span className='text-blue-600 md:text-3xl  lg:text-4xl xl:text-5xl'>Learning Management System</span></h1>
              <p className=' mt-4 text-center'>Your one-stop solution for online learning and education management.</p>

              <button className='p-2 flex items-center justify-center rounded-full m-10 hover:cursor-pointer font-bold bg-blue-300 '>Learn-More</button>
           </div>
           <div className='h-full w-68 flex text-center justify-center'>
            <img src={image} alt="hero" className=' h-auto object-cover rounded-lg  ' />
           </div>
            
        </div>
    </div>
  )
}

export default Hero