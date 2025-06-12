import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../assets/assets';

const CourseCard = () => {

  return (
    <section id='CourseCard' className='pt-18 bg-gradient-to-r from-[#f0f4f8] to-[#95a8dd]'>
      <h1 className='text-4xl font-bold text-center'>Our Courses</h1>

      <p className='text-center'>Explore our wide range of courses designed to help you succeed.</p>
      <div className='flex flex-wrap justify-center items-center gap-10 p-10'>
        
        {courses.map((course, index) => (
          <Link
          to={'/courses/' + course.id}
          key={index}
           className='flex flex-col hover:cursor-pointer w-72 h-72 bg-white shadow-lg rounded-lg border-1 border-gray-400'>
            <img src={course.image} alt={course.title} className='w-full  object-cover rounded-t-lg' />
          
            <div className='p-3 flex-col ' >
            <h3 className=' font-bold pb-2'>{course.title}</h3>
            <p className='text-sm'>{course.description}</p>
           <div className='flex justify-between items-center mt-3'>
             <p className='text-sm'>{course.stars}</p>
            <p className='text-xl'>{course.price}</p>
           </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
export default CourseCard;