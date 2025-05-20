import React from 'react'
import { useState } from "react";
import img from '../assets/Images/padho.png';
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { Link } from 'react-scroll';
import courseCard from './courseCard';



const Header = () => { 
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};
  const navItems = [
    { name: "Home", link: "Home" },
    { name: "About", link: "About" },
    { name: "Courses", link: "Courses" },
    { name: "Contact", link: "Contact" },
  ];

  return (
    <header className=' md:flex justify-between shadow-xl bg-[#95a8dd] items-center overflow-hidden fixed top-0 w-full text-black '> 
      <div className='object-cover h-18 w-24 flex items-center justify-center md:ml-20 md:pl-0 pl-5 md:pt-0 pt-10'>
        <img src={img} />
      </div>

      <div className='hidden md:flex justify-between gap-10 items-center w-[30%] px-5 cursor-pointer hover:'>
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

        <div id='menu' className='md:hidden flex relative bottom-8 justify-end'>
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
        )};

    </header>
  )
}

export default Header