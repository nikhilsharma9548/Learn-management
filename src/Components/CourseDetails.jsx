import React, { useContext, useEffect, useState }from 'react'
import {AppContext} from '../Context/AppContext';
import Loading from './Loading';
// import './index.css';
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoIosArrowDropup } from "react-icons/io";
import { useParams } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";

const CourseDetails = () => {

  

  const {id} = useParams()

  
const {allCourses} = useContext(AppContext);

  const [courseData, setCourseData] = useState(null)
  const [openSection, setopenSection ] = useState({})


const fetchCourseData = async () =>{

 const findCourse = allCourses.find(course => course.id === id)
 setCourseData(findCourse);
}
useEffect(() => {
  if (allCourses && allCourses.length > 0) {
    const findCourse = allCourses.find(course => String(course.id) === String(id));
    // console.log("Found Course:", findCourse);
    setCourseData(findCourse);
  }
}, [allCourses, id]);



// const toggleSection = (index) => {
//   setopenSection((prev) => (
//       {...prev,
//         [index]:  !prev[index]}
//   ));
// };


// console.log("All Courses:", allCourses);

  return courseData ? (
    
    <>
    <div className='pb-32 flex lg:flex-row flex-col-reverse gap-10  relative item-start justify-between md:px-36 px-8 md:pt-20 mt-20  pt-20 text-left  bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>

        {/* <div className='absolute top-0 left-0 w-full'></div> */}
        
      {/* left column */}
      <div className='max-w-xl z-10 text-gray-600'>
        <h1 className='font-semibold pb-2 text-4xl text-gray-800'>{courseData.title}</h1>
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0, 200)}}></p>
        <p className='pt-3 text-sm'>{courseData.stars}</p>
        <p className='pt-3'>Course by <span className='text-blue-500 text-sm underline'>{courseData.educator}</span></p>

         <div className='pt-8 z-10'> 
        <h2 className='text-lg text-black font-semibold'>Course Structure</h2>
        <div className=' mt-5 flex w-full rounded bg-white p-3 items-center justify-between border border-gray-500/50 '>
        
            <div className='flex items-center gap-2'
            onClick={() => toggleSection(courseData.id)}>
                <p className='text-2xl'><IoIosArrowDropup className='hover:cursor-pointer' /></p>

                <p className='text-gray-600 text-xs xl:text-base '>{courseData.title}</p>
            </div>
            <p className='text-gray-600 text-xs xl:text-base'>{courseData.duration}</p>

            {/* <div className={`flex items-center gap-2 max-h-80 ${openSection(index) ? 'max-h-80' : 'max-h-0'}
          {overflow-hidden`}>

            </div>
          */}
        </div>

         <div className='py-20 rich-text text-sm md:text-default'>
          <h3 className='text-xl font-semibold text-gray-900'>Course Description</h3>
          <p className='pt-4 md:text-base text-gray-600 text-sm' dangerouslySetInnerHTML={{__html:courseData.courseDescription}}></p>
         </div>

        </div>
      </div>

       
      {/* right column */}
      <div className='flex flex-col  h-[550px] shadow-2xl shadow-gray-500 md:min-w-md w-full max-w-sm  bg-white relative bottom-5'>
            <div>
              <img src={courseData.image} alt={courseData.name} className='max-w-md w-full z-10 bg-white shadow-lg shadow-gray-400' />
            </div>

            <div className='flex items-center gap-2 p-3 z-10 bg-white'>
                <p className='w-3.5 text-red-500'><FaRegClock /></p>
                <p className='text-red-500'><span className='font-medium'>6 days</span> left at this price!</p>
            </div>
                <h1 className=' flex item-center text-4xl font-semibold px-14 '>{courseData.price}</h1>
            <div className=' bg-white flex font-medium text-xs xl:text-base  px-2  z-10 items-center gap-3 py-5 text-gray-600 shadow-gray-400'>
              <p className=''>{courseData.stars.slice(0,1)}</p>
              <p>{courseData.rating}</p>|
              <p className='flex  items-center gap-1 '><FaRegClock />{courseData.duration}</p>|
              <p className='flex gap-1 items-center'><HiOutlineBookOpen /> One short</p>
              
            </div>
            
      </div>
      
    </div>
    </> 
    
  ): <Loading />
}


export default CourseDetails