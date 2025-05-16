import React from 'react'
import img from '../assets/Images/padho.png';

const Header = () => { 
  return (
    <header className=' md:flex justify-between shadow-xl bg-[#95a8dd] items-center overflow-hidden fixed w-full text-black '> 
      <div className='object-cover h-20 w-20 flex items-center justify-center ml-20'>
        <img src={img} />
      </div>
      <div className='hidden md:flex items-center justify-center w-[35%]'>
        <ul className='flex justify-evenly w-full items-center hover:cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* <div className='md:hidden flex items-center justify-evenly w-[35%]  p-5'>
        <ul className='flex justify-evenly w-full items-center hover:cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </header>
  )
}

export default Header