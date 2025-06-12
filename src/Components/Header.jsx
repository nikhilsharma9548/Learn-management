import React from 'react'
import { useState } from "react";
import { assets } from '../assets/assets';
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { Link } from 'react-scroll';


  

const Header = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};
  const navItems = [
    { name: "Home", link: "Home" },
    { name: "About", link: "About" },
    { name: "Courses", link: "CourseCard" },
    { name: "Contact", link: "Contact" },
  ];

  return (
    <header className=' md:flex justify-between shadow-xl bg-[#95a8dd] items-center overflow-hidden fixed top-0 w-full text-black '> 
      <div className='object-cover h-18 w-24 flex items-center justify-center md:ml-14 md:pl-0 pl-5  pt-10 pb-10'>
        <img src={assets.Padho} />
      </div>

      <div className='hidden md:flex justify-between gap-10 items-center w-auto  px-14 cursor-pointer '>
        {navItems.map((item, i) => (
          <Link
          key={i}
          to={item.link} 
          smooth={true} 
          duration={500}
          offset={-70}
          spy={true}
          activeClass="active-link underline decoration-2 underline-offset-4"
          >
          {item.name}
          </Link>
        ))}
      </div>
        {/* mobile veiw */}

        <div id='menu' className='h-0 md:hidden flex relative  justify-end items-end bottom-5 w-full px-4 '>
          <PiDotsThreeOutlineVerticalBold className='text-3xl cursor-pointer flex justify-center item-center ' onClick={toggleMenu} />
        </div>

        {menuOpen && (
          <div id='menu' className='h-48 w-68 md:hidden fixed flex flex-col  items-end gap-4 rounded-md bg-blue-500 text-white py-4 px-4 shadow-lg transition-transform duration-300 ease-in-out z-50'>

          
                    {navItems.map((item, i) => (
                      <h1
                        key={i}
                        href={item.link}
                        className="text-lg text-center w-full  "
                        onClick={() => setMenuOpen(false)}
                      >
                    
                       <Link
                       key={i}
                       to={item.link}
                       smooth={true}
                       duration={500}
                       offset={-70}
                       spy={true}
                       activeClass="active-link underline decoration-2 underline-offset-4"
                       className="text-lg cursor-pointer pb-3 transition-all duration-300"
                     >
                       {item.name}
                     </Link>
                      </h1>
                    ))}

          </div>
        )}

    </header>
  )
}

export default Header